import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LawnProps, LawnStyleProps } from "../../../@types/dataTypes";
import Grass from "../../atoms/grass";
import { lawnSizeCalculator } from "./hooks";

const LawnBox = styled.div<LawnStyleProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  height: ${(props) => props.lawnHeight}px;
  width: ${(props) => props.lawnWidth}px;
  background-color: skyblue;
`;

const Lawn: React.FC<LawnProps> = ({ grassSpan }) => {
  const { lawnHeight, lawnWidth } = lawnSizeCalculator(grassSpan);

  console.log(grassSpan);
  return (
    <LawnBox lawnHeight={lawnHeight} lawnWidth={lawnWidth}>
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
      <Grass span={grassSpan} color="red" />
    </LawnBox>
  );
};

export default Lawn;
