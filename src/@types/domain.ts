import { CommitRowType } from ".";

export class CommitRow implements CommitRowType {
  constructor(public date: Date, public count: number) {}
}

export class UnvisibleCommitRow implements CommitRowType {
  constructor(
    public date: Date,
    public count: number,
    readonly visibility: boolean
  ) {}
}
