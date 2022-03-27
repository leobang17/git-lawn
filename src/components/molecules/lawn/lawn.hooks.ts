import { Dispatch, SetStateAction } from "react";
import { CommitRowType } from "../../../@types";
import { UnvisibleCommitRow } from "../../../@types/domain";

export const fillUnvisibleRows = (commitRows: CommitRowType[]) => {
  const daysToFill = getDaysToFill(commitRows);
  const unvisibleRows = getUnvisibleRows(daysToFill);
  commitRows.unshift(...unvisibleRows);
};

export const lawnSizeResolver = (
  grassSpan: number,
  commitRows: CommitRowType[]
) => {
  const lawnWidthCount = lawnWidthCountCalculator(commitRows);
  return lawnSizeCalculator(grassSpan, lawnWidthCount);
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

const getDaysToFill = (targetArr: CommitRowType[]) => {
  return targetArr[0].date.getDay();
};

const getUnvisibleRows = (daysToFill: number) => {
  const tempRows = [] as CommitRowType[];
  for (let i = 0; i < daysToFill; i++) {
    const unvisibleRow = new UnvisibleCommitRow(new Date(), 0, false);
    tempRows.push(unvisibleRow);
  }
  return tempRows;
};

const lawnWidthCountCalculator = (commitRows: CommitRowType[]) => {
  const rowLength = commitRows.length;
  return Math.ceil(rowLength / 7);
};

const lawnSizeCalculator = (
  grassSpan: number,
  // lawnBoxWidth: number = 14
  lawnBoxWidth: number
) => {
  const lawnHeight = grassSpan * 7;
  const lawnWidth = grassSpan * lawnBoxWidth;
  return { lawnHeight, lawnWidth };
};
