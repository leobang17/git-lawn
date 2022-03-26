import { createContext } from "react";
import { CommitHistoryType } from "./@types";
import { CommitRow } from "./@types/domain";

export const UsernameContext = createContext<string | null>(null);

export const CommitHistoryContext = createContext<CommitHistoryType | null>(
  null
);
