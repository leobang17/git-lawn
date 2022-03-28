/* eslint-disable react-hooks/rules-of-hooks */
import { Dispatch, SetStateAction } from "react";
import {
  CommitHistoryType,
  LawnProps,
  LawnPropsRequired,
} from "../../../@types";
import APIConfig from "../../../api/APIConfig";
import { DefaultConfigValue } from "../../../utils/static";

export const defaultConfig = (params: LawnProps): LawnPropsRequired => {
  let key: keyof LawnProps;
  for (key in params) {
    if (!params[key]) {
      delete params[key];
    }
  }
  return { ...DefaultConfigValue, ...params };
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
