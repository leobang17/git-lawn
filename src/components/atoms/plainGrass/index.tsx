import React from "react";
import { GrassShape } from "../../../@types";
import { GrassDom } from "../grass/index.style";

const PlainGrass: React.FC<{
  color: string;
  grassShape: GrassShape;
  grassSpan: number;
}> = ({ color, grassShape, grassSpan }) => {
  return (
    <GrassDom
      visibility={true}
      color={color}
      grassShape={grassShape}
      grassSpan={grassSpan}
    ></GrassDom>
  );
};

export default PlainGrass;
