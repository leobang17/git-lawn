import React from "react";
import { GitLawnProps } from "../../@types";
import { UsernameContext } from "../../globalContext";
import Lawn from "../molecules/lawn";
import { defaultConfig } from "./index.hook";

const GitLawn: React.FC<GitLawnProps> = ({
  username,
  grassSpan,
  color,
  month,
}) => {
  const {
    grassSpan: _grassSpan,
    color: _color,
    month: _month,
  } = defaultConfig({
    grassSpan,
    color,
    month,
  });

  return (
    <UsernameContext.Provider value={username}>
      <Lawn grassSpan={_grassSpan} color={_color} month={_month} />
    </UsernameContext.Provider>
  );
};

export default GitLawn;
