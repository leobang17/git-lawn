import React, { useContext } from "react";
import styled from "styled-components";
import { GrassProps, LawnPropsRequired } from "../../../@types";
import { LawnContext } from "../../../utils/AppState";

const Box = styled.div<GrassProps>`
  height: ${(props) => props.grassSpan * 0.8}px;
  width: ${(props) => props.grassSpan * 0.8}px;
  margin: ${(props) => props.grassSpan * 0.1}px;
  background-color: ${(props) => props.color};
  border-radius: ${(props) => props.grassSpan * 0.15}px;
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
`;

const Grass: React.FC<
  Pick<GrassProps, "commitCount" | "visibility" | "color">
> = ({ color, commitCount, visibility }) => {
  // Context
  const { grassSpan } = useContext(LawnContext) as LawnPropsRequired;
  return (
    <Box
      grassSpan={grassSpan}
      color={color}
      commitCount={commitCount}
      visibility={visibility}
    ></Box>
  );
};

export default Grass;
