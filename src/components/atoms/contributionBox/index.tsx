import React, { useContext } from "react";
import { ContributionBoxProps, GeneralColorProps } from "../../../@types";
import { GeneralStyleContext } from "../../../utils/AppState";
import { MonthMapper } from "../../../utils/static";
import { BoldSpan, TextBox } from "./index.style";

const ContributionBox: React.FC<ContributionBoxProps> = ({ date, count }) => {
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
      <BoldSpan>{count} contributions </BoldSpan> on{contributionMonth}{" "}
      {contributionDate}, {contributionYear}
    </TextBox>
  );
};

export default ContributionBox;
