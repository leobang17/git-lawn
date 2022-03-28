import styled from "styled-components";
import { CONTRIBUTION_FONT_SIZE } from "../../../utils/static";

export const DateColumnDom = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: 10px;
`;

export const DateDom = styled.div<{ height: number; fontColor: string }>`
  line-height: ${(props) => props.height}px;
  color: ${(props) => props.fontColor};
  font-size: ${CONTRIBUTION_FONT_SIZE};
`;
