/* eslint-disable react-hooks/rules-of-hooks */
import { Dispatch, SetStateAction } from "react";
import {
  CommitHistoryType,
  LawnProps,
  LawnPropsRequired,
} from "../../../@types";
import APIConfig from "../../../api/APIConfig";

export const defaultConfig = (params: LawnProps): LawnPropsRequired => {
  let { color, grassSpan, month } = params;
  if (!color) {
    color = "GREEN";
  }
  if (!grassSpan) {
    grassSpan = 30;
  }
  if (!month) {
    month = 3;
  }

  return { color, grassSpan, month };
};

export const fetchData = async (
  username: string,
  setCommitHistory: Dispatch<SetStateAction<CommitHistoryType>>
) => {
  const apiConfig = new APIConfig(username);
  const dataRefiner = apiConfig.apiDataRefiner();
  setCommitHistory(await dataRefiner.getCommitHistory());
};

export const isNotLoaded = (data: Object) => {
  if (Object.keys(data).length === 0) {
    return true;
  }
  return false;
};
