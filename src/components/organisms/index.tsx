import React, { useEffect, useState } from "react";
import { CommitHistoryType, GitLawnProps } from "../../@types";
import APIConfig from "../../api/APIConfig";
import { CommitHistoryContext, UsernameContext } from "../../globalContext";
import Lawn from "../molecules/lawn";
import { defaultConfig, fetchData } from "./index.hook";

const GitLawn: React.FC<GitLawnProps> = ({
  username,
  grassSpan,
  color,
  month,
}) => {
  const [commitHistory, setCommitHistory] = useState<CommitHistoryType>();
  const {
    grassSpan: _grassSpan,
    color: _color,
    month: _month,
  } = defaultConfig({
    grassSpan,
    color,
    month,
  });

  useEffect(() => {
    fetchData(username, setCommitHistory);
  }, []);

  return (
    <UsernameContext.Provider value={username}>
      <CommitHistoryContext.Provider value={commitHistory as CommitHistoryType}>
        <Lawn grassSpan={_grassSpan} color={_color} month={_month} />
      </CommitHistoryContext.Provider>
    </UsernameContext.Provider>
  );
};

export default GitLawn;
