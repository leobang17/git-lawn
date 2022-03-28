import styled from "styled-components";
import {
  CONTRIBUTION_FONT_COLOR,
  CONTRIBUTION_FONT_SIZE,
} from "../../../utils/static";

export const DateColumnDom = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: 10px;
`;

export const DateDom = styled.div<{ height: number }>`
  line-height: ${(props) => props.height}px;
  color: ${CONTRIBUTION_FONT_COLOR};
  font-size: ${CONTRIBUTION_FONT_SIZE};
`;
