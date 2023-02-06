import React from "react";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { findIssueByNumber } from "services/github";

import { Header } from "./components/Header";
import { Markdown } from "./components/Markdown";

export function Issue() {
  const { issueId } = useParams();

  const { data: issue, isLoading } = useQuery(
    "issue",
    () => findIssueByNumber(Number(issueId)),
    {
      refetchOnWindowFocus: false,
    },
  );

  const isIssueExist = !!issue && Object.keys(issue).length > 0;

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
