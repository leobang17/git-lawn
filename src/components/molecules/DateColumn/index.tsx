import React, { useContext } from "react";
import { LawnPropsRequired } from "../../../@types";
import { DayMapper } from "../../../utils/static";
import { LawnContext } from "../../../utils/AppState";
import { DateColumnDom, DateDom } from "./index.style";

const DateColumn = () => {
  // Context
  const { grassSpan } = useContext(LawnContext) as LawnPropsRequired;

  return (
    <DateColumnDom>
      {DayMapper.map((day, idx) => {
        return (
          <DateDom height={grassSpan} key={idx}>
            {day}
          </DateDom>
        );
      })}
    </DateColumnDom>
  );
};

export default DateColumn;
