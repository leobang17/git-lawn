import React, { useEffect, useState } from "react";
import { CommitHistoryType, GitLawnProps } from "../../../@types";
import {
  CommitHistoryContext,
  GeneralStyleContext,
  LawnContext,
} from "../../../utils/AppState";
import { ThemeResolver } from "../../../utils/logics";
import ContributionBox from "../../atoms/contributionBox";
import DateColumn from "../../molecules/DateColumn";
import GradientInstruction from "../../molecules/gradientInstruction";
import Lawn from "../../molecules/lawn";
import DefaultLawn from "../DefaultLawn";

import { defaultLawnPropConfig, fetchData, isNotLoaded } from "./index.hook";
import { GitLawnBox, GitLawnDom } from "./index.style";

const GitLawn: React.FC<GitLawnProps> = ({
  username,
  grassSpan,
  color,
  month,
  darkmode,
  grassShape,
}) => {
  // States
  const [commitHistory, setCommitHistory] = useState<CommitHistoryType>(
    {} as CommitHistoryType
  );
  const {
    grassSpan: _grassSpan,
    color: _color,
    month: _month,
    darkmode: _darkmode,
  } = defaultLawnPropConfig({
    grassSpan,
    color,
    month,
    darkmode,
  });

  const generalStyle = new ThemeResolver(
    _darkmode,
    _color
  ).resolveGeneralStyle();

  // Effects
  useEffect(() => {
    fetchData(username, setCommitHistory);
  }, []);

  // Render
  if (isNotLoaded(commitHistory)) {
    return <DefaultLawn />;
  }

  return (
    <LawnContext.Provider
      value={defaultLawnPropConfig({
        grassSpan,
        color,
        month,
        darkmode,
        grassShape,
      })}
    >
      <GeneralStyleContext.Provider value={generalStyle}>
        <CommitHistoryContext.Provider value={commitHistory}>
          <GitLawnBox>
            <GitLawnDom backgroundColor={generalStyle.background}>
              <DateColumn />
              <Lawn />
            </GitLawnDom>
            <GradientInstruction />
          </GitLawnBox>
        </CommitHistoryContext.Provider>
      </GeneralStyleContext.Provider>
    </LawnContext.Provider>
  );
};

export default GitLawn;
