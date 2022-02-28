import React, { useEffect, useState } from "react";

import { CommitRowType, LawnProps } from "../../../@types/dataTypes";
import Grass from "../../atoms/grass";

import { fetchData, lawnSizeCalculator } from "./lawn.hooks";
import { LawnBox } from "./lawn.style";

const Lawn: React.FC<LawnProps> = ({ grassSpan, month, color }) => {
  // States
  const { lawnHeight, lawnWidth } = lawnSizeCalculator(grassSpan);
  const [commitHistory, setCommitHistory] = useState<CommitRowType[]>(
    [] as CommitRowType[]
  );

  // Effects
  useEffect(() => {
    fetchData(setCommitHistory, "leobang17");
  }, []);

  useEffect(() => {
    console.log(commitHistory);
  }, [commitHistory]);

  // Render
  return (
    <LawnBox lawnHeight={lawnHeight} lawnWidth={lawnWidth}>
      {commitHistory.map((iter, key) => {
        return <Grass grassSpan={grassSpan} color={color} />;
      })}
    </LawnBox>
  );
};

export default Lawn;
