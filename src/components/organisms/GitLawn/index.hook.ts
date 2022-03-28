/* eslint-disable react-hooks/rules-of-hooks */
import { Dispatch, SetStateAction } from "react";
import {
  CommitHistoryType,
  LawnProps,
  LawnPropsRequired,
} from "../../../@types";
import APIConfig from "../../../api/APIConfig";
import { defaultConfig } from "../../../utils/logics";
import { DefaultConfigValue } from "../../../utils/static";

export const defaultLawnPropConfig = (params: LawnProps) => {
  return defaultConfig<LawnPropsRequired>(DefaultConfigValue, params);
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

export const setDefaultValue = <T>(params: T, a: Required<T>): Required<T> => {
  return a;
};
export const setDefaultValueV2 = <T>(
  params: Partial<T>,
  defaultValue: T
): T => {
  return defaultValue;
};

setDefaultValue<LawnProps>(
  { color: "BLUE" },
  { color: "BLUE", darkmode: true, grassSpan: 30, month: 3 }
);
