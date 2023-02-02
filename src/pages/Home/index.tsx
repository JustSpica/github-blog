import React, { useState } from "react";
import { useQuery } from "react-query";

import { useDebounce } from "hooks/useDebounce";

import { findUser, findIssuesByContent } from "services/github";

import { Input } from "./components/Input";
import { Post } from "./components/Post";
import * as Profile from "./components/Profile";

export function Home() {
  const [content, setContenet] = useState("");
  const debouncedContent = useDebounce(content, 1500);

  const { data: user } = useQuery("users", () => findUser(), {
    refetchOnWindowFocus: false,
  });

  const { data: issues } = useQuery(
    ["shortIssues", debouncedContent],
    () => findIssuesByContent(debouncedContent),
    {
      refetchOnWindowFocus: false,
    },
  );

  function handleChangeContent(event: React.ChangeEvent<HTMLInputElement>) {
    setContenet(event.target.value);
  }

  const hasUserData = !!user;
  const hasAnyIssues = !!issues && issues.items.length > 0;

  return (
    <section className="w-full pb-12 max-w-[864px] m-auto">
      {hasUserData && (
        <Profile.Root>
          <Profile.Avatar url={user.avatar_url} />
          <Profile.Content>
            <Profile.HeaderData github={user.html_url} name={user.name} />
            <Profile.Description>{user.bio}</Profile.Description>
            <Profile.FooterData
              company={user.company}
              followers={user.followers}
              nick={user.login}
            />
          </Profile.Content>
        </Profile.Root>
      )}

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
          {hasAnyIssues ? (
            issues.items.map(issue => (
              <Post
                key={issue.number}
                createdAt={issue.created_at}
                description={issue.body}
                title={issue.title}
              />
            ))
          ) : (
            <h1>Nenhum Post</h1>
          )}
        </div>
      </div>
    </section>
  );
}
