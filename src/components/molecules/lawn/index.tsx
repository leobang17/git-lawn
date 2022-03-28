import React, { useContext } from "react";

import {
  ColorIdx,
  CommitHistoryType,
  LawnPropsRequired,
} from "../../../@types";
import { CommitHistoryContext, LawnContext } from "../../../utils/AppState";
import Grass from "../../atoms/grass";

import {
  colorDistributor,
  isVisible,
  fillUnvisibleRows,
  lawnSizeResolver,
} from "./lawn.hooks";
import { LawnBox } from "./lawn.style";
import { ThemeResolver } from "../../../utils/logics";

const Lawn: React.FC = () => {
  // Context
  const { commitRows, maxCount } = useContext(
    CommitHistoryContext
  ) as CommitHistoryType;
  const { darkmode, color, grassSpan } = useContext(
    LawnContext
  ) as LawnPropsRequired;

  // Logics
  const colorGradation = new ThemeResolver(darkmode, color).resolveGrassColor();

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
            color={colorGradation[colorIdx]}
            commitCount={iter.count}
            visibility={visibility}
          />
        );
      })}
    </LawnBox>
  );
};

export default Lawn;
