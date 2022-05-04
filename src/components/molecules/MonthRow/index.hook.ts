import { CommitRow } from "../../../@types/domain";
import { MonthMapper } from "../../../utils/static";

export const getMonthMapper = (commitRows: CommitRow[]) => {
  const rowLen = getRowLen(commitRows);

  let iterIdx = 0;
  let monthIdx = 99;
  const month = Array<string>();
  for (let i = 0; i < rowLen; i++) {
    if (monthIdx !== commitRows[iterIdx].date.getMonth()) {
      monthIdx = commitRows[iterIdx].date.getMonth();
      month.push(MonthMapper[monthIdx]);
    } else {
      month.push("");
    }
    iterIdx += 7;
  }
  return month;
};

const getRowLen = (commitRows: CommitRow[]): number => {
  return Math.floor((commitRows.length - 1) / 7) + 1;
};
