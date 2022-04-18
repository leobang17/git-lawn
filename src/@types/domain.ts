import { CommitRowType } from "./index";

export class CommitRow implements CommitRowType {
  constructor(readonly date: Date, public count: number) {}
}

export class UnvisibleCommitRow implements CommitRowType {
  constructor(
    readonly date: Date,
    public count: number,
    readonly visibility: boolean
  ) {}
}
