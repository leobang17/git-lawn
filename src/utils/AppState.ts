import { createContext } from "react";
import { CommitHistoryType } from "../@types";

export const UsernameContext = createContext<string | null>("");

export const CommitHistoryContext = createContext<
  CommitHistoryType | undefined
>({} as CommitHistoryType);
