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
      month: toDate.getMonth(),
      date: toDate.getDate(),
    };
  }

  private isToday(prev: YMD, current: YMD) {
    if (prev === current) {
      return true;
    }
    return false;
  }

  private refineCommitData(pushEventRows: EventType[]) {
    let prevDate = {} as YMD;

    return pushEventRows.map((event) => {
      const payload = event.payload as PushEventType;
      const commitCount = payload.commits.length;
      const createdDate = this.fullDateToYMD(event.created_at);
      if (this.isToday(prevDate, createdDate)) {
      }

      return {
        commitDate,
        commitCount,
      };
    });
  }

  async getCommitHistory(): Promise<CommitRowType[]> {
    const eventRows = await this.apiDataGetter.getEvents();
    const pushEventRows = this.extractPushEvent(eventRows);
    console.log(this.refineCommitData(pushEventRows));
    return new Promise((res, rej) => {
      res([{ date: new Date(), count: 1 }]);
    });
  }
}
