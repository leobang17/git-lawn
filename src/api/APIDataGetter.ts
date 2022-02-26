import axios, { Axios } from "axios";
import { AxiosInstance } from "axios";

import { EventType, PublicEventRequirements } from "../@types/dataTypes";
import { DataGetterAbstract } from "./api.interfaces";
import RequestInstance from "./RequestInstance";

export default class APIDataGetter implements DataGetterAbstract {
  constructor(private username: string, private GitAPI: AxiosInstance) {}

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
    const queryObj: Required<PublicEventRequirements> = {
      username: this.username,
      per_page: 100,
      page: 1,
    };

    let entireEvents: EventType[] = new Array<EventType>();

    while (true) {
      try {
        const query = this.queryBuilder(queryObj);
        const res = await this.fetchEvents(query);
        await entireEvents.push(...res);
      } catch (err) {
        break;
      }
      queryObj.page += 1;
    }

    return entireEvents;
  }
}
