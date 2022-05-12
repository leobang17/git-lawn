import styled from "styled-components";
import { VStack } from "../../../utils/Styles";

export const DateColumnDom = styled(VStack)`
  margin-inline: 10px;
`;

export const DateDom = styled.div<{
  height: number;
  fontColor: string;
  fontSize: number;
}>`
  line-height: ${(props) => props.height}px;
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize}px;
`;
