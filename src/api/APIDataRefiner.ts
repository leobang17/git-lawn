import { CommitRowType, EventType } from "../@types/dataTypes";
import { DataGetterAbstract, DataRefinerAbstract } from "./api.interfaces";

export default class APIDataRefiner implements DataRefinerAbstract {
  constructor(private apiDataGetter: DataGetterAbstract) {}

  async getCommitHistory(eventRows: EventType[]): Promise<CommitRowType[]> {
    return new Promise((res, rej) => {
      res([{ date: new Date(), count: 1 }]);
    });
  }
}
