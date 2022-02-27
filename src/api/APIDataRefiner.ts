import {
  CommitRowType,
  EventType,
  PushEventType,
  YMD,
} from "../@types/dataTypes";

import { DataGetterAbstract, DataRefinerAbstract } from "./api.interfaces";

export default class APIDataRefiner implements DataRefinerAbstract {
  constructor(private apiDataGetter: DataGetterAbstract) {}

  private extractPushEvent(eventRows: EventType[]) {
    return eventRows.filter((event) => event.type === "PushEvent");
  }

  private fullDateToYMD(dateString: string): YMD {
    const toDate = new Date(dateString);
    return {
      year: toDate.getFullYear(),
      month: toDate.getMonth() + 1,
      date: toDate.getDate(),
    };
  }

  private isToday(prev: YMD, current: YMD) {
    if (JSON.stringify(prev) === JSON.stringify(current)) {
      return true;
    }
    return false;
  }

  private refineCommitData(pushEventRows: EventType[]) {
    let prevDate = {} as YMD;
    const commitHistory: CommitRowType[] = [] as CommitRowType[];

    pushEventRows.forEach((event) => {
      const payload = event.payload as PushEventType;
      const commitCount = payload.commits.length;
      const createdDate = this.fullDateToYMD(event.created_at);

      if (this.isToday(prevDate, createdDate)) {
        commitHistory[commitHistory.length - 1].count += commitCount;
      } else {
        commitHistory.push({ date: createdDate, count: commitCount });
      }
      prevDate = { ...createdDate };
    });

    return commitHistory;
  }

  public async getCommitHistory(): Promise<CommitRowType[]> {
    const eventRows = await this.apiDataGetter.getEvents();
    const pushEventRows = this.extractPushEvent(eventRows);
    return this.refineCommitData(pushEventRows);
  }
}
