import React from "react";
import styled from "styled-components";
import { GrassProps } from "../../../@types";

const Box = styled.div<GrassProps>`
  height: ${(props) => props.grassSpan * 0.8}px;
  width: ${(props) => props.grassSpan * 0.8}px;
  margin: ${(props) => props.grassSpan * 0.1}px;
  background-color: ${(props) => props.color};
  border-radius: ${(props) => props.grassSpan * 0.15}px;
`;

const Grass: React.FC<GrassProps> = ({ grassSpan, color, commitCount }) => {
  return (
    <Box grassSpan={grassSpan} color={color} commitCount={commitCount}>
      {/* {commitCount} */}
    </Box>
  );
};

export default Grass;
