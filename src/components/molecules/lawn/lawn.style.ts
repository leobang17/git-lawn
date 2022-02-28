import styled from "styled-components";
import { LawnStyleProps } from "../../../@types/dataTypes";

export const LawnBox = styled.div<LawnStyleProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  background-color: skyblue;
  height: ${(props) => props.lawnHeight}px;
  width: ${(props) => props.lawnWidth}px;
`;
