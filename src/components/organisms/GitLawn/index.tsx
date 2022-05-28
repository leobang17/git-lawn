import React, { useEffect, useState } from "react";
import { CommitHistoryType, GitLawnProps } from "../../../@types";
import { HStack, InlineBlock, VStack } from "../../../utils/Styles";
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
  challengeId,
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
    fetchData(challengeId, _month, setCommitHistory);
  }, []);

  // Render
  if (isNotLoaded(commitHistory)) {
    return <DefaultLawn />;
  }

  return (
    <InlineBlock>
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
            <VStack>
              {/* <ContributionCount /> */}
              <VSTACK__INLINEFLEX backgroundColor={generalStyle.background}>
                <MonthRow />
                <HStack>
                  <DateColumn />
                  <Lawn />
                </HStack>
                <GradientInstruction />
              </VSTACK__INLINEFLEX>
            </VStack>
          </CommitHistoryContext.Provider>
        </GeneralStyleContext.Provider>
      </LawnContext.Provider>
    </InlineBlock>
  );
};

export default GitLawn;
