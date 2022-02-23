import React from "react";
import styled from "styled-components";
import { GrassProps } from "../../../@types/dataTypes";

const Box = styled.div<GrassProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.height};
  padding: ${(props) => props.height * 0.05};
  background-color: ${(props) => props.color};
  border-radius: 5px;
`;

const Grass: React.FC<GrassProps> = ({ height, color }) => {
  return <Box height={height} color={color} />;
};

export default Grass;
