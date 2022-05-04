import styled from "styled-components";
import { VStack } from "../../../utils/Styles";
import { GENERAL_STYLE } from "../../../utils/static";

export const GitLawnDom = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.backgroundColor};
`;

export const GitLawnBox = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const VSTACK__INLINEFLEX = styled(VStack)<{ backgroundColor: string }>`
  display: inline-flex;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${GENERAL_STYLE.theme.LIGHT.contributionFont};
  border-radius: 20px;
  padding-block: 15px;
  padding-inline: 20px;
`;
