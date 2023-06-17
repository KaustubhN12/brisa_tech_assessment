import React, { useEffect, useState } from "react";
import { Octokit } from "octokit";

const Issues = () => {

  const octokit = new Octokit({
    auth: process.env.REACT_APP_GIT_OUTH_TOKEN,
  });

  const githubIssue = async () => {
    try {
      const result = await octokit.request(
        "GET /repos/facebook/react/issues?page=1",
        {
          owner: "facebook",
          repo: "react",
        }
      );

      const titleAndAuthor = result.data;
      console.log(titleAndAuthor);
    } catch (error) {
      console.log(
        `Error! Status: ${error.status}. Message: ${error.response.data.message}`
      );
    }
  };

  useEffect(() => {
    githubIssue();
  }, []);

  return <div>
    
  </div>;
};

export default Issues;
