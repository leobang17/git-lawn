import React from "react";
import styled from "styled-components";
import InstructionText from "../../atoms/InstructionText";
import GrassGradientInstruction from "../grassGradientInstruction";

const GradientInstructionDom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  margin-block-start: 10px;
`;

const GradientInstruction = () => {
  return (
    <GradientInstructionDom>
      <InstructionText innerText="Less" />
      <GrassGradientInstruction />
      <InstructionText innerText="More" />
    </GradientInstructionDom>
  );
};

export default GradientInstruction;
