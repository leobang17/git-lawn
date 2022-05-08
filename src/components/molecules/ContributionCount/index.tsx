import React, { useContext } from "react";
import {
  CommitHistoryType,
  GeneralColorProps,
  LawnPropsRequired,
} from "../../../@types";
import {
  CommitHistoryContext,
  GeneralStyleContext,
  LawnContext,
} from "../../../utils/AppState";
import commaNumber from "comma-number";
import { BoldSpan } from "../../../utils/Styles";
import styled from "styled-components";

const ContributionCountDom = styled.div<{
  font: string;
  grassSpan: number;
}>`
  /* margin-inline: ${(props) => props.grassSpan}px; */
  margin-inline: 26px;
  margin-block: 8px;
  color: ${(props) => props.font};
  font-size: 18px;
`;

const ContributionCount = () => {
  // Context
  const { month, grassSpan } = useContext(LawnContext) as LawnPropsRequired;
  const { totalCount } = useContext(CommitHistoryContext) as CommitHistoryType;
  const { font } = useContext(GeneralStyleContext) as GeneralColorProps;

  return (
    <ContributionCountDom font={font} grassSpan={grassSpan}>
      <BoldSpan>{commaNumber(totalCount)} contributions</BoldSpan> in the last{" "}
      {month} month.
    </ContributionCountDom>
  );
};

export default ContributionCount;
