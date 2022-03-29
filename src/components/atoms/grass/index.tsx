import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
  GeneralColorProps,
  GrassProps,
  LawnPropsRequired,
} from "../../../@types";
import { GeneralStyleContext, LawnContext } from "../../../utils/AppState";
import Contribution from "../contribution";

const GrassDom = styled.div<Pick<GrassProps, "grassSpan" | "visibility">>`
  position: relative;
  height: ${(props) => props.grassSpan * 0.8}px;
  width: ${(props) => props.grassSpan * 0.8}px;
  margin: ${(props) => props.grassSpan * 0.1}px;
  background-color: ${(props) => props.color};
  border-radius: ${(props) => props.grassSpan * 0.15}px;
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
`;

const Grass: React.FC<
  Pick<GrassProps, "date" | "commitCount" | "visibility" | "color">
> = ({ color, date, commitCount, visibility }) => {
  // Context
  const { grassSpan } = useContext(LawnContext) as LawnPropsRequired;
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
