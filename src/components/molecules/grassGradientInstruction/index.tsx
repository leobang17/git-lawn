import React, { useContext } from "react";
import styled from "styled-components";
import { LawnPropsRequired } from "../../../@types";
import { LawnContext } from "../../../utils/AppState";
import { ThemeResolver } from "../../../utils/logics";
import PlainGrass from "../../atoms/plainGrass";

const GrassGradientInstructionDom = styled.div`
  display: flex;
  flex-direction: row;
`;

const GrassGradientInstruction = () => {
  // Context
  const { darkmode, color, grassSpan, grassShape } = useContext(
    LawnContext
  ) as LawnPropsRequired;
  const themeResolver = new ThemeResolver(darkmode, color);
  const grassColorGradient = themeResolver.resolveGrassColor();
  console.log(grassColorGradient);

  return (
    <GrassGradientInstructionDom>
      {grassColorGradient.map((color, idx) => {
        return (
          <PlainGrass
            key={idx}
            color={color}
            grassShape={grassShape}
            grassSpan={grassSpan * 0.7}
          />
        );
      })}
    </GrassGradientInstructionDom>
  );
};

export default GrassGradientInstruction;
