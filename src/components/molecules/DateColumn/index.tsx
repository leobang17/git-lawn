import React, { useContext } from "react";
import { GeneralColorProps, LawnPropsRequired } from "../../../@types";
import { DayMapper } from "../../../utils/static";
import { GeneralStyleContext, LawnContext } from "../../../utils/AppState";
import { DateColumnDom, DateDom } from "./index.style";

const DateColumn = () => {
  // Context
  const { grassSpan } = useContext(LawnContext) as LawnPropsRequired;
  const { font } = useContext(GeneralStyleContext) as GeneralColorProps;

  return (
    <DateColumnDom>
      {DayMapper.map((day, idx) => {
        return (
          <DateDom height={grassSpan} fontColor={font} key={idx}>
            {day}
          </DateDom>
        );
      })}
    </DateColumnDom>
  );
};

export default DateColumn;
