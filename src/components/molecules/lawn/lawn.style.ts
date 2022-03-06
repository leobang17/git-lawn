import styled from "styled-components";
import { LawnStyleProps } from "../../../@types";

export const LawnBox = styled.div<LawnStyleProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  background-color: #23272d;
  height: ${(props) => props.lawnHeight}px;
  width: ${(props) => props.lawnWidth}px;
`;
