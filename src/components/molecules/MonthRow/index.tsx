import React, { useContext } from "react";
import styled from "styled-components";
import { HStack } from "../../../utils/Alignments";
import {
  CommitHistoryContext,
  GeneralStyleContext,
  LawnContext,
} from "../../../utils/AppState";
import { CONTRIBUTION_FONT_SIZE } from "../../../utils/static";
import {
  CommitHistoryType,
  GeneralColorProps,
  LawnPropsRequired,
} from "../../../@types/index";
import { getMonthMapper } from "./index.hook";

const BlockText = styled.div`
  visibility: hidden;
  font-size: ${CONTRIBUTION_FONT_SIZE}px;
  margin-inline: 10px;
`;

const MonthText = styled.div<{ grassSpan: number; font: string }>`
  font-size: ${CONTRIBUTION_FONT_SIZE}px;
  color: ${(props) => props.font};
  width: ${(props) => props.grassSpan}px;
  text-align: center;
`;

const MonthRow = () => {
  const { commitRows } = useContext(CommitHistoryContext) as CommitHistoryType;
  const { grassSpan } = useContext(LawnContext) as LawnPropsRequired;
  const { font } = useContext(GeneralStyleContext) as GeneralColorProps;

  const monthDisplays = getMonthMapper(commitRows);

  return (
    <HStack>
      {/* Block text: just for blank space  */}
      <BlockText>Mon</BlockText>
      {monthDisplays.map((month, idx) => {
        return (
          <MonthText grassSpan={grassSpan} font={font} key={idx}>
            {month}
          </MonthText>
        );
      })}
    </HStack>
  );
};

export default MonthRow;
