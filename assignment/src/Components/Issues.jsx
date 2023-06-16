import React, { useEffect, useState } from "react";
import { Octokit } from "octokit";
import axios from "axios";
const Issues = () => {
  const [openIssue, setOpenIssue] = useState(0);
  const [closedIssue, setClosedIssue] = useState(0);

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

  const getOpenAndClosedIssuesCount = async () => {
    const openIssue = await axios.get(
      "https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:open",
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GIT_OUTH_TOKEN}`,
        },
      }
    );
    // console.log(openIssue.data.total_count);
    setOpenIssue(openIssue.data.total_count);

    const closedIssue = await axios.get(
      "https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:closed",
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GIT_OUTH_TOKEN}`,
        },
      }
    );
    // console.log(closedIssue.data.total_count);
    setClosedIssue(closedIssue.data.total_count);
  };

  console.log(openIssue, closedIssue);

  useEffect(() => {
    githubIssue();
    getOpenAndClosedIssuesCount();
  }, []);

  return <div></div>;
};

export default Issues;
