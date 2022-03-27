import React, { createContext, Provider } from "react";
import { CommitHistoryType } from "../@types";

export const UsernameContext = createContext<string | null>("");

export const CommitHistoryContext = createContext<
  CommitHistoryType | undefined
>({} as CommitHistoryType);

interface Props {
  children: React.ReactNode;
}

export const CommitHistoryProvider: React.FC<Props> = ({
  children,
}: Props): any => {
  return;
};
