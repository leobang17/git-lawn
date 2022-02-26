import React from "react";
import { useEffect } from "react";
import GitAPI from "../../api/APIConfig";
import APIDataGetter from "../../api/APIDataGetter";

const GitLawn = () => {
  // 지우고 merge할 것.
  const fetchAPI = async () => {
    // const dataGetter = new APIDataGetter("leobang17");
    // const res = await dataGetter.getEvents();
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return <div>GitLawn</div>;
};

export default GitLawn;
