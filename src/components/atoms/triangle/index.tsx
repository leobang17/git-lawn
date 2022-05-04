import React from "react";
import { IconContext } from "react-icons";
import { VscTriangleDown } from "react-icons/vsc";
import styled from "styled-components";
import { CONTRIBUTION_FONT_SIZE } from "../../../utils/static";

const UpsideDownTriangle = styled.div`
  position: absolute;
  top: -${CONTRIBUTION_FONT_SIZE * 2.3}px;
  left: 50%;
  transform: translateX(-50%);
`;

const Triangle: React.FC<{ backgroundColor: string }> = ({
  backgroundColor,
}) => {
  return (
    <UpsideDownTriangle>
      <IconContext.Provider
        value={{
          style: {
            color: backgroundColor,
            fontSize: CONTRIBUTION_FONT_SIZE * 1.5,
          },
        }}
      >
        <VscTriangleDown />
      </IconContext.Provider>
    </UpsideDownTriangle>
  );
};

export default Triangle;
