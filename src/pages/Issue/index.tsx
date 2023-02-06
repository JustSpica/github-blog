import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";

import { findIssueByNumber } from "services/github";
import { IssuesItem } from "services/github/github";

import { Header } from "./components/Header";
import { Markdown } from "./components/Markdown";

export function Issue() {
  const [isLoading, setIsLoading] = useState(true);
  const [issue, setIssue] = useState({} as IssuesItem);
  const { issueId } = useParams();

  async function findIssue() {
    try {
      const issueData = await findIssueByNumber(Number(issueId));
      setIsLoading(false);
      setIssue(issueData);
    } catch (error) {
      console.log(error);
    }
  }

  const isIssueExist = !!issue && Object.keys(issue).length > 0;

  console.log(isLoading);

  console.log(issue);

  useEffect(() => {
    findIssue();
  }, []);

  return (
    <section className="w-full pb-12 max-w-[864px] m-auto">
      {isLoading || !isIssueExist ? (
        <Skeleton
          baseColor="#112131"
          highlightColor="#1C2F41"
          className="w-full h-[171px] -mt-16 !block rounded-xl shadow-slate-900 shadow-lg cursor-not-allowed"
        />
      ) : (
        <Header
          comments={issue?.comments}
          createdAt={issue?.created_at}
          githubRedirect={issue?.html_url}
          name={issue?.user.login}
          title={issue?.title}
        />
      )}
      <Markdown content={issue?.body || ""} />
    </section>
  );
}
