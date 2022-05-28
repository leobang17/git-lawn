import { CommitHistoryType } from "../@types";
import { DataRefinerAbstract, DateService } from "./api.interfaces";
import axios from "axios";

export class ServiceDataRefiner implements DataRefinerAbstract {
  private BASE_URL = "http://localhost:8000";
  constructor(private challengeId: string) {}

  public async getCommitHistory() {
    const url = "/api/challenge";
    const currentDate = this.getCurrentDatetime();
    const axiosInstance = this.getAxiosInstance();
    const res = await axiosInstance.get(url, {
      params: {
        challenge_id: this.challengeId,
        date: currentDate,
      },
    });
    const commitHistory = res.data as CommitHistoryType;
    return commitHistory;
  }

  private getCurrentDatetime() {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().padStart(4, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  private getAxiosInstance() {
    const instance = axios.create({
      baseURL: this.BASE_URL,
      headers: {
        "content-type": "application/json",
      },
    });
    return instance;
  }
}
