import { strictEqual } from "assert";
import { DataGetterAbstract } from "./api.interfaces";
import APIDataGetter from "./APIDataGetter";
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
}
