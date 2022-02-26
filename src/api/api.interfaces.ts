import { CommitRowType, EventType } from "../@types/dataTypes";

export interface DataGetterAbstract {
  getEvents: () => Promise<EventType[]>;
}

export interface DataRefinerAbstract {
  getCommitHistory: (eventRows: EventType[]) => Promise<CommitRowType[]>;
}
