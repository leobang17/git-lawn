import { CommitRowType, EventType } from "../@types/dataTypes";
import { DataRefinerAbstract } from "./api.interfaces";

export default class DataRefiner implements DataRefinerAbstract {
  async getCommitHistory(eventRows: EventType[]): Promise<CommitRowType[]> {
    return new Promise((res, rej) => {
      res([{ date: new Date(), count: 1 }]);
    });
  }
}
