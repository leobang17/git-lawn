import APIDataGetter from "./APIDataGetter";

export default class APIConfig {
  private dataGetter: APIDataGetter;

  constructor(private username: string) {
    this.dataGetter = new APIDataGetter(this.username);
  }
}
