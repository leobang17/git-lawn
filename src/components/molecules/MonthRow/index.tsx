import React, { useContext } from "react";
import styled from "styled-components";
import { HStack, VStack } from "../../../utils/Alignments";
import {
  CommitHistoryContext,
  GeneralStyleContext,
  LawnContext,
} from "../../../utils/AppState";
import { CONTRIBUTION_FONT_SIZE, MonthMapper } from "../../../utils/static";
import {
  CommitHistoryType,
  GeneralColorProps,
  LawnPropsRequired,
} from "../../../@types/index";
import { getMonthMapper } from "./index.hook";

const MonthRowDom = styled(HStack)``;

const BlockText = styled.div`
  visibility: hidden;
  font-size: ${CONTRIBUTION_FONT_SIZE};
  margin-inline: 10px;
`;

const MonthText = styled.div<{ grassSpan: number; font: string }>`
  font-size: ${CONTRIBUTION_FONT_SIZE};
  color: ${(props) => props.font};
  text-align: center;
  width: ${(props) => props.grassSpan}px;
`;

const MonthRow = () => {
  const { commitRows } = useContext(CommitHistoryContext) as CommitHistoryType;
  const { grassSpan } = useContext(LawnContext) as LawnPropsRequired;
  const { font } = useContext(GeneralStyleContext) as GeneralColorProps;

  const monthDisplays = getMonthMapper(commitRows);

  return (
    <MonthRowDom>
      <BlockText>Mon</BlockText>
      {monthDisplays.map((month, idx) => {
        return (
          <MonthText grassSpan={grassSpan} font={font} key={idx}>
            {month}
          </MonthText>
        );
      })}
    </MonthRowDom>
  );
};

export default MonthRow;
