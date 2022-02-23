import React from "react";
import styled from "styled-components";
import { GrassProps } from "../../../@types/dataTypes";

const Box = styled.div<GrassProps>`
  height: ${(props) => props.span * 0.9}px;
  width: ${(props) => props.span * 0.9}px;
  margin: ${(props) => props.span * 0.05}px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
`;

const Grass: React.FC<GrassProps> = ({ span, color }) => {
  console.log(span, color);
  return <Box span={span} color={color} />;
};

export default Grass;
