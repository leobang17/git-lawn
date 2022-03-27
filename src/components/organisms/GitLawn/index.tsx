import React, { useEffect, useState } from "react";
import { CommitHistoryType, GitLawnProps } from "../../../@types";
import { CommitHistoryContext, LawnContext } from "../../../utils/AppState";
import DateColumn from "../../molecules/DateColumn";
import Lawn from "../../molecules/lawn";
import DefaultLawn from "../DefaultLawn";
import { defaultConfig, fetchData, isNotLoaded } from "./index.hook";
import { GitLawnDom } from "./index.style";

const GitLawn: React.FC<GitLawnProps> = ({
  username,
  grassSpan,
  color,
  month,
}) => {
  // States
  const [commitHistory, setCommitHistory] = useState<CommitHistoryType>(
    {} as CommitHistoryType
  );
  const {
    grassSpan: _grassSpan,
    color: _color,
    month: _month,
  } = defaultConfig({
    grassSpan,
    color,
    month,
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
    <LawnContext.Provider value={defaultConfig({ grassSpan, color, month })}>
      <CommitHistoryContext.Provider value={commitHistory}>
        <GitLawnDom>
          <DateColumn />
          <Lawn grassSpan={_grassSpan} color={_color} month={_month} />
        </GitLawnDom>
      </CommitHistoryContext.Provider>
    </LawnContext.Provider>
  );
};

export default GitLawn;
