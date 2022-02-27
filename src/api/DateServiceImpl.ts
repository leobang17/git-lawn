import { DateService } from "./api.interfaces";

export default class DateServiceImpl implements DateService {
  toDate(dateString: string) {
    return new Date(dateString.split("T")[0]);
  }

  getStartDate() {
    const currentDate = this.getCurrentDate();
    currentDate.setMonth(currentDate.getMonth() - 3);

    return currentDate;
  }

  getCurrentDate() {
    const currentDate = new Date();
    currentDate.setHours(9);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);

    return currentDate;
  }
}
