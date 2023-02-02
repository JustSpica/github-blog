import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "react-query";

import { useDebounce } from "hooks/useDebounce";

import { findIssuesByContent } from "services/github";

import { Input } from "./components/Input";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";

export function Home() {
  const [content, setContenet] = useState("");
  const debouncedContent = useDebounce(content, 1500);

  const { data: issues, isLoading } = useQuery(
    ["shortIssues", debouncedContent],
    () => findIssuesByContent(debouncedContent),
    {
      refetchOnWindowFocus: false,
    },
  );

  function handleChangeContent(event: React.ChangeEvent<HTMLInputElement>) {
    setContenet(event.target.value);
  }

  const hasAnyIssues = !!issues && issues.items.length > 0;

  return (
    <section className="w-full pb-12 max-w-[864px] m-auto">
      <Profile />
      <div className="w-full mt-16">
        <div>
          <header className="flex items-center justify-between">
            <strong className="text-lg text-slate-100">Publicações</strong>
            <span className="text-sm text-slate-300">
              {issues?.total_count || 0} Publicações
            </span>
          </header>
          <Input
            type="text"
            placeholder="Buscar conteúdo"
            onChange={handleChangeContent}
          />
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8">
          {isLoading &&
            [...Array(6)].map((_, index) => (
              <Skeleton
                key={index}
                className="w-full h-[245px] !block cursor-not-allowed"
                baseColor="#112131"
                highlightColor="#1C2F41"
              />
            ))}
          {hasAnyIssues &&
            issues.items.map(issue => (
              <Post
                key={issue.number}
                createdAt={issue.created_at}
                description={issue.body}
                title={issue.title}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
