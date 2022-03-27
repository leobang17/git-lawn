import React, { useEffect, useState } from "react";
import { CommitHistoryType, GitLawnProps } from "../../../@types";
import APIConfig from "../../../api/APIConfig";
import { CommitHistoryContext, UsernameContext } from "../../../utils/AppState";
import Lawn from "../../molecules/lawn";
import DefaultLawn from "../DefaultLawn";
import { defaultConfig, fetchData, isNotLoaded } from "./index.hook";

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
    <UsernameContext.Provider value={username}>
      <CommitHistoryContext.Provider value={commitHistory}>
        <Lawn grassSpan={_grassSpan} color={_color} month={_month} />
      </CommitHistoryContext.Provider>
    </UsernameContext.Provider>
  );
};

export default GitLawn;
