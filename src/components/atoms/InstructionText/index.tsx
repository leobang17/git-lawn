import React, { useContext } from "react";
import styled from "styled-components";
import { GeneralColorProps } from "../../../@types";
import { GeneralStyleContext } from "../../../utils/AppState";
import { CONTRIBUTION_FONT_SIZE } from "../../../utils/static";

const InstructionTextDom = styled.text<{ fontColor: string }>`
  font-size: ${CONTRIBUTION_FONT_SIZE}px;
  color: ${(props) => props.fontColor};
  margin-inline: 5px;
`;

const InstructionText: React.FC<{ innerText: string }> = ({ innerText }) => {
  const { font } = useContext(GeneralStyleContext) as GeneralColorProps;
  return <InstructionTextDom fontColor={font}>{innerText}</InstructionTextDom>;
};

export default InstructionText;
