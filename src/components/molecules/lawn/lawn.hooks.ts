import { Dispatch, SetStateAction } from "react";
import { CommitRowType } from "../../../@types";
import { UnvisibleCommitRow } from "../../../@types/domain";
import APIConfig from "../../../api/APIConfig";

export const lawnSizeCalculator = (
  grassSpan: number,
  lawnBoxWidth: number = 14
) => {
  const lawnHeight = grassSpan * 7;
  const lawnWidth = grassSpan * lawnBoxWidth;
  return { lawnHeight, lawnWidth };
};

export const fetchData = async (
  commitHisrotySetter: Dispatch<SetStateAction<CommitRowType[]>>,
  maxCountSetter: Dispatch<SetStateAction<number>>,
  username: string
) => {
  const apiConfig = new APIConfig(username);
  const dataRefiner = apiConfig.apiDataRefiner();

  const { commitRows, maxCount } = await dataRefiner.getCommitHistory();

  const daysToFill = getDaysToFill(commitRows);

  fillUnvisibleGrass(commitRows, daysToFill);

  commitHisrotySetter(commitRows);
  maxCountSetter(maxCount);
};

export const lawnWidthCountCalculator = (commitRows: CommitRowType[]) => {
  const rowLength = commitRows.length;
  return Math.ceil(rowLength / 7);
};

const getDaysToFill = (targetArr: CommitRowType[]) => {
  return targetArr[0].date.getDay();
};

const fillUnvisibleGrass = (targetArr: CommitRowType[], daysToFill: number) => {
  for (let i = 0; i < daysToFill; i++) {
    const unvisibleBox = new UnvisibleCommitRow(new Date(), 0, false);
    targetArr.unshift(unvisibleBox);
  }
};

export const colorDistributor = (maxCount: number, count: number) => {
  const quarter = maxCount / 4;
  if (count === 0) {
    return 0;
  } else if (0 < count && count <= quarter) {
    return 1;
  } else if (quarter < count && count <= quarter * 2) {
    return 2;
  } else if (quarter * 2 < count && count <= quarter * 3) {
    return 3;
  } else if (quarter * 3 < count && count <= maxCount) {
    return 4;
  }
};

export const getStartDay = (
  commitHistory: CommitRowType[],
  startDaySetter: Dispatch<SetStateAction<number>>
) => {
  if (commitHistory.length > 0) {
    startDaySetter(commitHistory[0].date.getDay());
  }
};

export const isVisible = (
  row: CommitRowType | UnvisibleCommitRow
): row is UnvisibleCommitRow => {
  return (<UnvisibleCommitRow>row).visibility === undefined;
};
