import React, { useEffect, useState } from "react";
import IssueNav from "../Components/IssueNav";
import axios from "axios";
import Issues from "../Components/Issues";

const OpenIssues = () => {
  const [openIssue, setOpenIssue] = useState(0);
  const [closedIssue, setClosedIssue] = useState(0);

  const getOpenAndClosedIssuesCount = async () => {
    const openIssue = await axios.get(
      "https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:open",
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GIT_OUTH_TOKEN}`,
        },
      }
    );
    setOpenIssue(openIssue.data.total_count);

    const closedIssue = await axios.get(
      "https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:closed",
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GIT_OUTH_TOKEN}`,
        },
      }
    );
    setClosedIssue(closedIssue.data.total_count);
  };
  useEffect(() => {
    getOpenAndClosedIssuesCount();
  }, []);

  // console.log(openIssue,closedIssue)

  return (
    <div>
      <IssueNav openIssue={openIssue} closedIssue={closedIssue} />
      <Issues />
    </div>
  );
};

export default OpenIssues;
