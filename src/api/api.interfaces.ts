import { CommitRowType, EventType } from "../@types";

export interface DataGetterAbstract {
  getEvents: () => Promise<EventType[]>;
}

export interface DataRefinerAbstract {
  getCommitHistory: () => Promise<{
    commitRows: CommitRowType[];
    maxCount: number;
  }>;
  // getStartDate: () => Date;
}

export interface DateService {
  toDate: (dateString: string) => Date;
  getStartDate: () => Date;
  getCurrentDate: () => Date;
}
