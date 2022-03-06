import { Dispatch, SetStateAction, useEffect } from "react";
import { CommitRowType } from "../../../@types";
import APIConfig from "../../../api/APIConfig";

export const lawnSizeCalculator = (grassSpan: number) => {
  const lawnHeight = grassSpan * 7;
  const lawnWidth = grassSpan * 14;
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
  commitHisrotySetter(commitRows);
  maxCountSetter(maxCount);
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
