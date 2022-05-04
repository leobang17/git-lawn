import { CommitRowType, EventType, PushEventType } from "../@types";
import { CommitRow } from "../@types/domain";

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

  private iterEventRows(
    reversedEventRows: EventType[],
    commitHistory: CommitRowType[],
    cursorDate: Date
  ) {
    let maxCount = 0;
    let totalCount = 0;

    reversedEventRows.forEach((event) => {
      const payload = event.payload as PushEventType;
      const commitCount = payload.commits.length;
      const createdDate = this.dateService.toDate(event.created_at);

      cursorDate = this.createEmptyRows(commitHistory, cursorDate, createdDate);

      if (
        createdDate.getTime() ===
        commitHistory[commitHistory.length - 1].date.getTime()
      ) {
        commitHistory[commitHistory.length - 1].count += commitCount;
        totalCount += commitCount;
        maxCount = Math.max(
          maxCount,
          commitHistory[commitHistory.length - 1].count
        );
      }
    });

    return { cursorDate, maxCount, totalCount };
  }

  private createEmptyRows(
    commitHistory: CommitRowType[],
    cursorDate: Date,
    createdDate: Date
  ) {
    let copyDate = new Date(cursorDate);
    while (copyDate.getTime() < createdDate.getTime()) {
      commitHistory.push(new CommitRow(copyDate, 0));
      copyDate = new Date(copyDate.setDate(copyDate.getDate() + 1));
    }

    return copyDate;
  }

  private postFill(commitHistory: CommitRowType[], lastDate: Date) {
    const today = this.dateService.getCurrentDate();

    while (lastDate.getTime() < today.getTime()) {
      commitHistory.push(new CommitRow(lastDate, 0));
      lastDate = new Date(lastDate.setDate(lastDate.getDate() + 1));
    }
  }

  private addInitialRow(commitHistory: CommitRowType[], startDate: Date) {
    commitHistory.push(new CommitRow(startDate, 0));
  }

  private refineCommitData(pushEventRows: EventType[]) {
    const commitHistory: CommitRowType[] = [] as CommitRowType[];
    const startDate = this.dateService.getStartDate();

    this.addInitialRow(commitHistory, startDate);

    const reversedEventRows = pushEventRows.reverse();

    const { cursorDate, maxCount, totalCount } = this.iterEventRows(
      reversedEventRows,
      commitHistory,
      startDate
    );

    this.postFill(commitHistory, cursorDate);

    return { commitRows: commitHistory, maxCount, totalCount };
  }

  public async getCommitHistory() {
    const eventRows = await this.apiDataGetter.getEvents();
    const pushEventRows = this.extractPushEvent(eventRows);
    const { commitRows, maxCount, totalCount } =
      this.refineCommitData(pushEventRows);

    return { commitRows, maxCount, totalCount };
  }
}
