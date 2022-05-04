import styled from "styled-components";
import { CONTRIBUTION_FONT_SIZE } from "../../../utils/static";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextBox = styled.div<{
  fontColor: string;
  backgroundColor: string;
}>`
  display: inline;
  position: absolute;
  z-index: 99;
  white-space: nowrap;
  top: -${CONTRIBUTION_FONT_SIZE * 5.5}px;
  left: -50%;
  font-size: ${CONTRIBUTION_FONT_SIZE}px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  line-height: ${CONTRIBUTION_FONT_SIZE * 2.75}px;
  padding: ${CONTRIBUTION_FONT_SIZE * 0.5}px ${CONTRIBUTION_FONT_SIZE * 1.5}px
    ${CONTRIBUTION_FONT_SIZE * 0.5}px ${CONTRIBUTION_FONT_SIZE * 1.5}px;
  border-radius: ${CONTRIBUTION_FONT_SIZE * 0.75}px;
`;
