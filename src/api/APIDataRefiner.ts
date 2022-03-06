import { CommitRowType, EventType, PushEventType } from "../@types";

import {
  DataGetterAbstract,
  DataRefinerAbstract,
  DateService,
} from "./api.interfaces";

export default class APIDataRefiner implements DataRefinerAbstract {
  constructor(
    private apiDataGetter: DataGetterAbstract,
    private dateService: DateService
  ) {}

  private extractPushEvent(eventRows: EventType[]) {
    return eventRows.filter((event) => event.type === "PushEvent");
  }

  private refineCommitData(pushEventRows: EventType[]) {
    const commitHistory: CommitRowType[] = [] as CommitRowType[];
    const today = this.dateService.getCurrentDate();
    let tempDate = this.dateService.getStartDate();
    const reversedEventRows = pushEventRows.reverse();

    reversedEventRows.forEach((event) => {
      const payload = event.payload as PushEventType;
      const commitCount = payload.commits.length;
      const createdDate = this.dateService.toDate(event.created_at);

      while (tempDate.getTime() < createdDate.getTime()) {
        commitHistory.push({ date: tempDate, count: 0 });
        tempDate = new Date(tempDate.setDate(tempDate.getDate() + 1));
      }

      if (
        commitHistory.length > 0 &&
        commitHistory[commitHistory.length - 1].date.getTime() ===
          createdDate.getTime()
      ) {
        commitHistory[commitHistory.length - 1].count += commitCount;
      } else {
        commitHistory.push({ date: createdDate, count: commitCount });
      }
    });

    while (tempDate.getTime() < today.getTime()) {
      commitHistory.push({ date: tempDate, count: 0 });
      tempDate = new Date(tempDate.setDate(tempDate.getDate() + 1));
    }

    return commitHistory;
  }

  public async getCommitHistory(): Promise<CommitRowType[]> {
    const eventRows = await this.apiDataGetter.getEvents();
    const pushEventRows = this.extractPushEvent(eventRows);
    return this.refineCommitData(pushEventRows);
  }
}
