import { DateService } from "./api.interfaces";

export default class DateServiceImpl implements DateService {
  constructor(private month: number) {}

  public toDate(dateString: string) {
    return new Date(dateString.split("T")[0]);
  }

  public getStartDate() {
    const currentDate = this.getCurrentDate();
    currentDate.setMonth(currentDate.getMonth() - this.month);

    return currentDate;
  }

  public getCurrentDate() {
    const currentDate = new Date();
    currentDate.setHours(9);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);

    return currentDate;
  }
}
