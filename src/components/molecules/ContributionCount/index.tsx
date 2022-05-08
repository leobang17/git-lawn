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
import { FontSizeResolver } from "../../../utils/logics";

const ContributionCountDom = styled.div<{
  font: string;
  grassSpan: number;
  fontSize: number;
}>`
  margin-inline: 26px;
  margin-block: 8px;
  color: ${(props) => props.font};
  font-size: ${(props) => props.fontSize}px;
`;

const ContributionCount = () => {
  // Context
  const { month, grassSpan } = useContext(LawnContext) as LawnPropsRequired;
  const { totalCount } = useContext(CommitHistoryContext) as CommitHistoryType;
  const { font } = useContext(GeneralStyleContext) as GeneralColorProps;

  const fontSize = new FontSizeResolver(grassSpan).contributionFontResolver();

  return (
    <ContributionCountDom font={font} grassSpan={grassSpan} fontSize={fontSize}>
      <BoldSpan>{commaNumber(totalCount)} contributions</BoldSpan> in the last{" "}
      {month} month.
    </ContributionCountDom>
  );
};

export default ContributionCount;
