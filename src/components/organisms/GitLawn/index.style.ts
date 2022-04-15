import styled from "styled-components";
import { HStack, VStack } from "../../../utils/Alignments";

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
`;
