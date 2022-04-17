import React, { useEffect, useState } from "react";
import { CommitHistoryType, GitLawnProps } from "../../../@types";
import { HStack } from "../../../utils/Styles";
import {
  CommitHistoryContext,
  GeneralStyleContext,
  LawnContext,
} from "../../../utils/AppState";
import { ThemeResolver } from "../../../utils/logics";
import ContributionCount from "../../molecules/ContributionCount";
import DateColumn from "../../molecules/DateColumn";
import GradientInstruction from "../../molecules/gradientInstruction";
import Lawn from "../../molecules/lawn";
import MonthRow from "../../molecules/MonthRow";
import DefaultLawn from "../DefaultLawn";

import { defaultLawnPropConfig, fetchData, isNotLoaded } from "./index.hook";
import { VSTACK__INLINEFLEX } from "./index.style";

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
          <ContributionCount />
          <VSTACK__INLINEFLEX backgroundColor={generalStyle.background}>
            <MonthRow />
            <HStack>
              <DateColumn />
              <Lawn />
            </HStack>
            <GradientInstruction />
          </VSTACK__INLINEFLEX>
        </CommitHistoryContext.Provider>
      </GeneralStyleContext.Provider>
    </LawnContext.Provider>
  );
};

export default GitLawn;
