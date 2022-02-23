import React from "react";
import { useEffect } from "react";
import GitAPI from "../../api/config";
import APIDataGetter from "../../api/instance";

const GitLawn = () => {
  // 지우고 merge할 것.
  const fetchAPI = async () => {
    const dataGetter = new APIDataGetter("leobang17");
    const res = await dataGetter.getEvents();
    console.log(res);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return <div>GitLawn</div>;
};

export default GitLawn;
