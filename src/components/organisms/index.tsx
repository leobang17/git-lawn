import React from "react";
import { GitLawnProps, LawnProps } from "../../@types/dataTypes";
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
    <Lawn
      username={username}
      grassSpan={_grassSpan}
      color={_color}
      month={_month}
    />
  );
};

export default GitLawn;
