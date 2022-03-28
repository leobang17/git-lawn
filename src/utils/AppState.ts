import { createContext } from "react";
import {
  CommitHistoryType,
  GeneralColorProps,
  LawnPropsRequired,
} from "../@types";

export const UsernameContext = createContext<string | null>("");

export const CommitHistoryContext = createContext<
  CommitHistoryType | undefined
>({} as CommitHistoryType);

export const LawnContext = createContext<LawnPropsRequired | null>(
  {} as LawnPropsRequired
);

export const GeneralStyleContext = createContext<GeneralColorProps | null>(
  {} as GeneralColorProps
);
