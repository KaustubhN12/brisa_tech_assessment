import React, { useEffect } from "react";
import { Octokit } from "octokit";
const Issues = () => {
    const octokit = new Octokit({
        auth: process.env.REACT_APP_GIT_OUTH_TOKEN
      })

  const githubIssue = async () => {
    try {
      const result = await octokit.request(
        "GET /repos/KaustubhN12/dizzy-stitch-9009/issues?state=closed&page=1",
        {
          owner: "KaustubhN12",
          repo: "dizzy-stitch-9009",
        }
      );

      const titleAndAuthor = result.data;

      console.log(titleAndAuthor);
      console.log(process.env.REACT_APP_GIT_OUTH_TOKEN)
    } catch (error) {
      console.log(
        `Error! Status: ${error.status}. Message: ${error.response.data.message}`
      );
    }
  };
  useEffect(() => {
    githubIssue();
  }, []);

  return <div></div>;
};

export default Issues;
