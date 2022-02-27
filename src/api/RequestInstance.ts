import axios, { AxiosInstance } from "axios";

export default class RequestInstance {
  private static BASE_URL = "https://api.github.com";
  private static requestInstance: AxiosInstance = axios.create({
    baseURL: RequestInstance.BASE_URL,
    timeout: 5000,
  });

  private constructor() {}

  public static getInstance() {
    return RequestInstance.requestInstance;
  }
}
