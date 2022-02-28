import React from "react";
import styled from "styled-components";
import { GrassProps } from "../../../@types/dataTypes";

const Box = styled.div<GrassProps>`
  height: ${(props) => props.span * 0.8}px;
  width: ${(props) => props.span * 0.8}px;
  margin: ${(props) => props.span * 0.1}px;
  background-color: ${(props) => props.color};
  border-radius: ${(props) => props.span * 0.15}px;
`;

const Grass: React.FC<GrassProps> = ({ span, color }) => {
  return <Box span={span} color={color} />;
};

export default Grass;
