import React, { useContext, useState } from "react";
import {
  GeneralColorProps,
  GrassProps,
  LawnPropsRequired,
} from "../../../@types";
import { GeneralStyleContext, LawnContext } from "../../../utils/AppState";
import Contribution from "../contribution";
import { GrassDom } from "./index.style";

const Grass: React.FC<
  Pick<GrassProps, "date" | "commitCount" | "visibility" | "color">
> = ({ color, date, commitCount, visibility }) => {
  // Context
  const { grassSpan, grassShape } = useContext(
    LawnContext
  ) as LawnPropsRequired;
  const { contributionBackground } = useContext(
    GeneralStyleContext
  ) as GeneralColorProps;

  // States
  const [isHovered, setIsHovered] = useState(false);

  const mouseEnterHandler = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  };

  const mouseLeaveHandler = () => {
    if (isHovered) {
      setIsHovered(false);
    }
  };

  return (
    <>
      <GrassDom
        grassSpan={grassSpan}
        color={color}
        visibility={visibility}
        grassShape={grassShape}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {isHovered && (
          <Contribution
            date={date}
            count={commitCount}
            backgroundColor={contributionBackground}
          />
        )}
      </GrassDom>
    </>
  );
};

export default Grass;
