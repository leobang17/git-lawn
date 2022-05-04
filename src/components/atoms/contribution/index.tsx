import React from "react";
import styled from "styled-components";
import { ContributionBoxProps } from "../../../@types";
import ContributionBox from "../contributionBox";
import Triangle from "../triangle";

const ContributionDom = styled.div`
  position: relative;
`;

const Contribution: React.FC<
  ContributionBoxProps & { backgroundColor: string }
> = ({ date, count, backgroundColor }) => {
  return (
    <ContributionDom>
      <ContributionBox date={date} count={count} />
      <Triangle backgroundColor={backgroundColor} />
    </ContributionDom>
  );
};

export default Contribution;
