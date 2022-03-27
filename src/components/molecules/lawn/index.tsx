import React, { useContext, useEffect, useState } from "react";

import {
  ColorIdx,
  CommitHistoryType,
  CommitRowType,
  LawnProps,
  LawnPropsRequired,
} from "../../../@types";
import { GRASS_COLOR } from "../../../@types/static";
import { CommitHistoryContext } from "../../../utils/AppState";
import Grass from "../../atoms/grass";

import {
  colorDistributor,
  getUnvisibleRows,
  getDaysToFill,
  isVisible,
  lawnSizeCalculator,
  lawnWidthCountCalculator,
} from "./lawn.hooks";
import { LawnBox } from "./lawn.style";

const Lawn: React.FC<LawnPropsRequired> = ({ grassSpan, month, color }) => {
  // Context
  const { commitRows, maxCount } = useContext(
    CommitHistoryContext
  ) as CommitHistoryType;
  const daysToFill = getDaysToFill(commitRows);
  const unvisibleRows = getUnvisibleRows(daysToFill);
  commitRows.unshift(...unvisibleRows);
  const lawnWidthCount = lawnWidthCountCalculator(commitRows);
  const lawnSize = lawnSizeCalculator(grassSpan, lawnWidthCount);
  const { lawnHeight, lawnWidth } = lawnSize;

  // Render
  return (
    <LawnBox lawnHeight={lawnHeight} lawnWidth={lawnWidth}>
      {commitRows.map((iter, idx) => {
        const colorIdx = colorDistributor(maxCount, iter.count) as ColorIdx;
        const visibility = isVisible(iter);

        return (
          <Grass
            key={idx}
            grassSpan={grassSpan}
            color={GRASS_COLOR[color][colorIdx]}
            commitCount={iter.count}
            visibility={visibility}
          />
        );
      })}
    </LawnBox>
  );
};

export default Lawn;
