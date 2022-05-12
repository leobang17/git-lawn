import React, { useContext } from "react";
import styled from "styled-components";
import { GeneralColorProps, LawnPropsRequired } from "../../../@types";
import { GeneralStyleContext, LawnContext } from "../../../utils/AppState";
import { FontSizeResolver } from "../../../utils/logics";

const InstructionTextDom = styled.div<{ fontColor: string; fontSize: number }>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.fontColor};
  margin-inline: 5px;
`;

const InstructionText: React.FC<{ innerText: string }> = ({ innerText }) => {
  const { font } = useContext(GeneralStyleContext) as GeneralColorProps;
  const { grassSpan } = useContext(LawnContext) as LawnPropsRequired;

  const fontSize = new FontSizeResolver(grassSpan).mainFontResolver();

  return (
    <InstructionTextDom fontColor={font} fontSize={fontSize}>
      {innerText}
    </InstructionTextDom>
  );
};

export default InstructionText;
