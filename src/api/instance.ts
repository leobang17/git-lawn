import axios from "axios";
import { AxiosInstance, AxiosError } from "../../node_modules/axios/index";

import { EventType, PublicEventRequirements } from "../@types/dataTypes";

export default class APIDataGetter {
  static BASE_URL = "https://api.github.com";
  private GitAPI: AxiosInstance;

  constructor(private username: string) {
    this.GitAPI = axios.create({
      baseURL: APIDataGetter.BASE_URL,
      timeout: 5000,
    });
  }

  private queryBuilder(params: PublicEventRequirements) {
    let { username, per_page, page } = params;
    if (!per_page) {
      per_page = 100;
    }
    if (!page) {
      page = 1;
    }
    const endpoint = `/users/${username}/events/public?per_page=${per_page}&page=${page}`;
    return endpoint;
  }

  private async fetchEvents(query: string) {
    const res = await this.GitAPI.get<EventType[]>(query);
    const eventRows: EventType[] = res.data;
    return eventRows;
  }

  async getEvents() {
    let endjob = false;
    const queryObj: Required<PublicEventRequirements> = {
      username: this.username,
      per_page: 100,
      page: 1,
    };

    const entireEvents: EventType[] = new Array<EventType>();

    // while (!endjob) {
    try {
      const query = this.queryBuilder(queryObj);
      const res = await this.fetchEvents(query);
      console.log(res);
      entireEvents.push(...res);
    } catch (err) {
      console.log("끝");
      endjob = true;
    }
    // }
    return entireEvents;
  }
}
