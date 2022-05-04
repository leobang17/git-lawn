import {
  DataGetterAbstract,
  DataRefinerAbstract,
  DateService,
} from "./api.interfaces";
import APIDataGetter from "./APIDataGetter";
import APIDataRefiner from "./APIDataRefiner";
import DateServiceImpl from "./DateServiceImpl";
import RequestInstance from "./RequestInstance";

export default class APIConfig {
  private username: string;
  private month: number;

  constructor(username: string, month: number) {
    this.username = username;
    this.month = month;
  }

  private requireInstance() {
    return RequestInstance.getInstance();
  }

  private apiDataGetter(): DataGetterAbstract {
    return new APIDataGetter(this.username, this.requireInstance());
  }

  private dateService(): DateService {
    return new DateServiceImpl(this.month);
  }

  public apiDataRefiner(): DataRefinerAbstract {
    return new APIDataRefiner(this.apiDataGetter(), this.dateService());
  }
}
