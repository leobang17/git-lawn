import React, { useEffect, useRef, useState } from "react";

import { ColorIdx, CommitRowType, LawnProps } from "../../../@types";
import { GRASS_COLOR } from "../../../@types/static";
import Grass from "../../atoms/grass";

import {
  colorDistributor,
  fetchData,
  getStartDay,
  isVisible,
  lawnSizeCalculator,
  lawnWidthCountCalculator,
} from "./lawn.hooks";
import { LawnBox } from "./lawn.style";

const Lawn: React.FC<LawnProps> = ({ grassSpan, month, color }) => {
  // States
  const lawnSize = lawnSizeCalculator(grassSpan);
  const [lawnHeight, setLawnHeight] = useState(lawnSize.lawnHeight);
  const [lawnWidth, setLawnWidth] = useState(lawnSize.lawnWidth);
  const [maxCount, setMaxCount] = useState(0);
  const [commitHistory, setCommitHistory] = useState<CommitRowType[]>(
    [] as CommitRowType[]
  );

  // Effects
  useEffect(() => {
    fetchData(setCommitHistory, setMaxCount, "leobang17");
  }, []);

  useEffect(() => {
    const lawnWidthCount = lawnWidthCountCalculator(commitHistory);
    const lawnSize = lawnSizeCalculator(grassSpan, lawnWidthCount);
    setLawnHeight(lawnSize.lawnHeight);
    setLawnWidth(lawnSize.lawnWidth);
  }, [commitHistory]);

  // Render
  return (
    <LawnBox lawnHeight={lawnHeight} lawnWidth={lawnWidth}>
      {commitHistory.map((iter, idx) => {
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
