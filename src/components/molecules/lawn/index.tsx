import React, { useContext, useEffect, useState } from "react";

import {
  ColorIdx,
  CommitHistoryType,
  CommitRowType,
  LawnProps,
  LawnPropsRequired,
} from "../../../@types";
import { GRASS_COLOR } from "../../../@types/static";
import { CommitHistoryContext, UsernameContext } from "../../../globalContext";
import Grass from "../../atoms/grass";

import {
  colorDistributor,
  fetchData,
  isVisible,
  lawnSizeCalculator,
  lawnWidthCountCalculator,
} from "./lawn.hooks";
import { LawnBox } from "./lawn.style";

const Lawn: React.FC<LawnPropsRequired> = ({ grassSpan, month, color }) => {
  // States
  const lawnSize = lawnSizeCalculator(grassSpan);
  const [lawnHeight, setLawnHeight] = useState(lawnSize.lawnHeight);
  const [lawnWidth, setLawnWidth] = useState(lawnSize.lawnWidth);
  const [maxCount, setMaxCount] = useState(0);
  const [commitHistory, setCommitHistory] = useState<CommitRowType[]>(
    [] as CommitRowType[]
  );
  const username = useContext(UsernameContext) as string;
  // const { commitRows, maxCount } = useContext(CommitHistoryContext) as CommitHistoryType;

  // Effects
  useEffect(() => {
    fetchData(setCommitHistory, setMaxCount, username);
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
