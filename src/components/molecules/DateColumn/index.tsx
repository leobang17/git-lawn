import React, { useContext } from "react";
import { GeneralColorProps, LawnPropsRequired } from "../../../@types";
import { DayMapper } from "../../../utils/static";
import { GeneralStyleContext, LawnContext } from "../../../utils/AppState";
import { DateColumnDom, DateDom } from "./index.style";
import { FontSizeResolver } from "../../../utils/logics";

const DateColumn = () => {
  // Context
  const { grassSpan } = useContext(LawnContext) as LawnPropsRequired;
  const { font } = useContext(GeneralStyleContext) as GeneralColorProps;

  const fontSize = new FontSizeResolver(grassSpan).mainFontResolver();

  return (
    <DateColumnDom>
      {DayMapper.map((day, idx) => {
        return (
          <DateDom
            height={grassSpan}
            fontColor={font}
            fontSize={fontSize}
            key={idx}
          >
            {day}
          </DateDom>
        );
      })}
    </DateColumnDom>
  );
};

export default DateColumn;
