import styled from "styled-components";

export const GitLawnDom = styled.div<{ backgroundColor: string }>`
  display: inline-flex;
  flex-direction: row;
  background-color: ${(props) => props.backgroundColor};
`;
