import { Dispatch, SetStateAction, useEffect } from "react";
import { CommitRowType } from "../../../@types";
import APIConfig from "../../../api/APIConfig";

export const lawnSizeCalculator = (grassSpan: number) => {
  const lawnHeight = grassSpan * 7;
  const lawnWidth = grassSpan * 14;
  return { lawnHeight, lawnWidth };
};

export const fetchData = async (
  setterFunc: Dispatch<SetStateAction<CommitRowType[]>>,
  username: string
) => {
  const apiConfig = new APIConfig(username);
  const dataRefiner = apiConfig.apiDataRefiner();

  const res = await dataRefiner.getCommitHistory();
  setterFunc(res);
};
