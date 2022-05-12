import React, { useContext } from "react";
import styled from "styled-components";
import { HStack } from "../../../utils/Styles";
import {
  CommitHistoryContext,
  GeneralStyleContext,
  LawnContext,
} from "../../../utils/AppState";
import {
  CommitHistoryType,
  GeneralColorProps,
  LawnPropsRequired,
} from "../../../@types/index";
import { getMonthMapper } from "./index.hook";
import { FontSizeResolver } from "../../../utils/logics";

const BlockText = styled.div<{ fontSize: number }>`
  visibility: hidden;
  font-size: ${(props) => props.fontSize}px;
  margin-inline: 10px;
`;

const MonthText = styled.div<{
  grassSpan: number;
  font: string;
  fontSize: number;
}>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.font};
  width: ${(props) => props.grassSpan}px;
  text-align: center;
`;

const MonthRow = () => {
  const { commitRows } = useContext(CommitHistoryContext) as CommitHistoryType;
  const { grassSpan } = useContext(LawnContext) as LawnPropsRequired;
  const { font } = useContext(GeneralStyleContext) as GeneralColorProps;

  const fontSize = new FontSizeResolver(grassSpan).mainFontResolver();

  const monthDisplays = getMonthMapper(commitRows);

  return (
    <HStack>
      {/* Block text: just for blank space  */}
      <BlockText fontSize={fontSize}>Mon</BlockText>
      {monthDisplays.map((month, idx) => {
        return (
          <MonthText
            grassSpan={grassSpan}
            font={font}
            fontSize={fontSize}
            key={idx}
          >
            {month}
          </MonthText>
        );
      })}
    </HStack>
  );
};

export default MonthRow;
