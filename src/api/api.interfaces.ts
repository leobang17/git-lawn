import { CommitRowType, EventType } from "../@types";

export interface DataGetterAbstract {
  getEvents: () => Promise<EventType[]>;
}

export interface DataRefinerAbstract {
  getCommitHistory: () => Promise<CommitRowType[]>;
  // getStartDate: () => Date;
}

export interface DateService {
  toDate: (dateString: string) => Date;
  getStartDate: () => Date;
  getCurrentDate: () => Date;
}
