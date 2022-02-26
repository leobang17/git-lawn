import { DataGetterAbstract, DataRefinerAbstract } from "./api.interfaces";
import APIDataGetter from "./APIDataGetter";
import APIDataRefiner from "./APIDataRefiner";
import RequestInstance from "./RequestInstance";

export default class APIConfig {
  private username: string;

  constructor(username: string) {
    this.username = username;
  }

  public requireInstance() {
    return RequestInstance.getInstance();
  }

  public apiDataGetter(): DataGetterAbstract {
    return new APIDataGetter(this.username, this.requireInstance());
  }

  public apiDataRefiner(): DataRefinerAbstract {
    return new APIDataRefiner(this.apiDataGetter());
  }
}
