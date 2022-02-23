import React, { useEffect, useState } from "react";

import { LawnProps } from "../../../@types/dataTypes";
import Grass from "../../atoms/grass";

import { lawnSizeCalculator } from "./lawn.hooks";
import { LawnBox } from "./lawn.style";

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
