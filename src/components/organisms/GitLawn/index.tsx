import React, { useEffect, useState } from "react";
import { CommitHistoryType, GitLawnProps } from "../../../@types";
import { CommitHistoryContext, LawnContext } from "../../../utils/AppState";
import ContributionBox from "../../atoms/contributionBox";
import DateColumn from "../../molecules/DateColumn";
import Lawn from "../../molecules/lawn";
import DefaultLawn from "../DefaultLawn";

import { defaultLawnPropConfig, fetchData, isNotLoaded } from "./index.hook";
import { GitLawnDom } from "./index.style";

const GitLawn: React.FC<GitLawnProps> = ({
  username,
  grassSpan,
  color,
  month,
  darkmode,
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
      value={defaultLawnPropConfig({ grassSpan, color, month, darkmode })}
    >
      <CommitHistoryContext.Provider value={commitHistory}>
        <GitLawnDom>
          <DateColumn />
          <Lawn
            grassSpan={_grassSpan}
            color={_color}
            month={_month}
            darkmode={_darkmode}
          />
        </GitLawnDom>
        <ContributionBox date={new Date()} count={10} span={10} />
      </CommitHistoryContext.Provider>
    </LawnContext.Provider>
  );
};

export default GitLawn;
