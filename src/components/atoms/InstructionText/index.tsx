import React from "react";
import styled from "styled-components";
import { CONTRIBUTION_FONT_SIZE } from "../../../utils/static";

const InstructionTextDom = styled.text`
  font-size: ${CONTRIBUTION_FONT_SIZE}px;
`;

const InstructionText: React.FC<{ innerText: string }> = ({ innerText }) => {
  return <InstructionTextDom>{innerText}</InstructionTextDom>;
};

export default InstructionText;
