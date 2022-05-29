import { CommitHistoryType, CommitRowType } from "../@types";
import { DataRefinerAbstract, DateService } from "./api.interfaces";
import axios from "axios";

type ServerRes = {
  commitRows: ServerRows[];
  maxCount: number;
  totalCount: number;
};

type ServerRows = {
  date: string;
  count: number;
};

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
    const commitHistory = res.data as ServerRes;
    const commitRows = this.stringToDate(commitHistory.commitRows);
    return { ...commitHistory, commitRows };
  }

  private stringToDate(commitRows: ServerRows[]): CommitRowType[] {
    const res = [...commitRows].map((commitRow: ServerRows) => {
      return {
        date: new Date(commitRow.date),
        count: commitRow.count,
      } as CommitRowType;
    });
    return res;
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
