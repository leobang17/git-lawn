import React, { useContext } from "react";
import styled from "styled-components";
import { ContributionBoxProps, GeneralColorProps } from "../../../@types";
import { GeneralStyleContext } from "../../../utils/AppState";
import { CONTRIBUTION_FONT_SIZE, MonthMapper } from "../../../utils/static";

const TextBox = styled.div<{ fontColor: string; backgroundColor: string }>`
  display: inline;
  font-size: ${CONTRIBUTION_FONT_SIZE}px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
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
  const { contributionFont, contributionBackground } = useContext(
    GeneralStyleContext
  ) as GeneralColorProps;

  const contributionMonth = MonthMapper[date.getMonth()];
  const contributionDate = date.getDate();
  const contributionYear = date.getFullYear();

  return (
    <TextBox
      fontColor={contributionFont}
      backgroundColor={contributionBackground}
    >
      <BoldSpan>{count} contributions</BoldSpan> on {contributionMonth}{" "}
      {contributionDate}, {contributionYear}
    </TextBox>
  );
};

export default ContributionBox;
