import React from "react";
import styled from "styled-components";
import { ContributionBoxProps } from "../../../@types";
import { CONTRIBUTION_FONT_SIZE, MonthMapper } from "../../../utils/static";
import {
  CONTRIBUTION_BOX_COLOR,
  CONTRIBUTION_FONT_COLOR,
} from "../../../utils/static";

const TextBox = styled.text`
  font-size: ${CONTRIBUTION_FONT_SIZE}px;
  background-color: ${CONTRIBUTION_BOX_COLOR};
  color: ${CONTRIBUTION_FONT_COLOR};
  line-height: ${CONTRIBUTION_FONT_SIZE * 2.75}px;
  padding: ${CONTRIBUTION_FONT_SIZE * 0.75}px ${CONTRIBUTION_FONT_SIZE * 1.5}px
    ${CONTRIBUTION_FONT_SIZE * 0.75}px ${CONTRIBUTION_FONT_SIZE * 1.5}px;
  border-radius: ${CONTRIBUTION_FONT_SIZE * 0.75}px;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const ContributionBox: React.FC<ContributionBoxProps> = ({
  date,
  count,
  span,
}) => {
  const contributionMonth = MonthMapper[date.getMonth()];
  const contributionDate = date.getDate();
  const contributionYear = date.getFullYear();

  return (
    <TextBox>
      <BoldSpan>{count} contributions</BoldSpan> on {contributionMonth}{" "}
      {contributionDate}, {contributionYear}
    </TextBox>
  );
};

export default ContributionBox;
