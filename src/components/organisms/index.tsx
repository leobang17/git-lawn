import React from "react";
import { useEffect } from "react";
import APIConfig from "../../api/APIConfig";

const GitLawn = () => {
  // 지우고 merge할 것.

  const apiConfig = new APIConfig("leobang17");
  const dataRefiner = apiConfig.apiDataRefiner();
  const fetchAPI = async () => {
    const res = await dataRefiner.getCommitHistory();
    // console.log(dataRefiner.getStartDate());
    console.log(res);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return <div>GitLawn</div>;
};

export default GitLawn;
