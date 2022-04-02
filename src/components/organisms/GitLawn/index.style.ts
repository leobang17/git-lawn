import styled from "styled-components";

export const GitLawnDom = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.backgroundColor};
`;

export const GitLawnBox = styled.div`
  display: inline-flex;
  flex-direction: column;
`;
