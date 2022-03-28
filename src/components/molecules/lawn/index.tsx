import React, { useContext } from "react";

import {
  ColorIdx,
  CommitHistoryType,
  LawnPropsRequired,
} from "../../../@types";
import { GRASS_COLOR } from "../../../utils/static";
import { CommitHistoryContext } from "../../../utils/AppState";
import Grass from "../../atoms/grass";

import {
  colorDistributor,
  isVisible,
  fillUnvisibleRows,
  lawnSizeResolver,
} from "./lawn.hooks";
import { LawnBox } from "./lawn.style";

const Lawn: React.FC<LawnPropsRequired> = ({ grassSpan, month, color }) => {
  // Context
  const { commitRows, maxCount } = useContext(
    CommitHistoryContext
  ) as CommitHistoryType;

  fillUnvisibleRows(commitRows);
  const { lawnHeight, lawnWidth } = lawnSizeResolver(grassSpan, commitRows);

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
