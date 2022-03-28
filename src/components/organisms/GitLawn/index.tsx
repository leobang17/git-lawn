import React, { useEffect, useState } from "react";
import { CommitHistoryType, GitLawnProps } from "../../../@types";
import APIConfig from "../../../api/APIConfig";
import { CommitHistoryContext, UsernameContext } from "../../../utils/AppState";
import Lawn from "../../molecules/lawn";
import DefaultLawn from "../DefaultLawn";
import { defaultLawnPropConfig, fetchData, isNotLoaded } from "./index.hook";

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
    <UsernameContext.Provider value={username}>
      <CommitHistoryContext.Provider value={commitHistory}>
        <Lawn
          grassSpan={_grassSpan}
          color={_color}
          month={_month}
          darkmode={_darkmode}
        />
      </CommitHistoryContext.Provider>
    </UsernameContext.Provider>
  );
};

export default GitLawn;
