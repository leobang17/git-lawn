import React, { useContext, useEffect, useState } from "react";

import {
  ColorIdx,
  CommitHistoryType,
  CommitRowType,
  LawnProps,
  LawnPropsRequired,
} from "../../../@types";
import { GRASS_COLOR } from "../../../@types/static";
import { CommitHistoryContext, UsernameContext } from "../../../utils/AppState";
import Grass from "../../atoms/grass";

import {
  colorDistributor,
  fetchData,
  getUnvisibleRows,
  getDaysToFill,
  isVisible,
  lawnSizeCalculator,
  lawnWidthCountCalculator,
} from "./lawn.hooks";
import { LawnBox } from "./lawn.style";

const Lawn: React.FC<LawnPropsRequired> = ({ grassSpan, month, color }) => {
  // Context
  const commitContext = useContext(CommitHistoryContext) as CommitHistoryType;

  // States
  const lawnSize = lawnSizeCalculator(grassSpan);
  const [lawnHeight, setLawnHeight] = useState(lawnSize.lawnHeight);
  const [lawnWidth, setLawnWidth] = useState(lawnSize.lawnWidth);
  const [commitRows, setCommitRows] = useState(commitContext.commitRows);
  const [isLoaded, setIsLoaded] = useState(false);

  // Effects
  useEffect(() => {
    const daysToFill = getDaysToFill(commitRows);
    const unvisibleRows = getUnvisibleRows(daysToFill);
    setCommitRows((prev) => [...unvisibleRows, ...prev]);
  }, []);

  useEffect(() => {
    const lawnWidthCount = lawnWidthCountCalculator(commitRows);
    const lawnSize = lawnSizeCalculator(grassSpan, lawnWidthCount);
    setLawnHeight(lawnSize.lawnHeight);
    setLawnWidth(lawnSize.lawnWidth);
  }, [commitRows]);

  // Render
  return (
    <LawnBox lawnHeight={lawnHeight} lawnWidth={lawnWidth}>
      {commitRows.map((iter, idx) => {
        const colorIdx = colorDistributor(
          commitContext.maxCount,
          iter.count
        ) as ColorIdx;
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
