import React from "react";
import { useQuery } from "react-query";

import { findUser } from "services/github";

import { Input } from "./components/Input";
import { Post } from "./components/Post";
import * as Profile from "./components/Profile";

export function Home() {
  const { data: user } = useQuery("users", () => findUser(), {
    refetchOnWindowFocus: false,
  });

  return (
    <section className="w-full pb-12 max-w-[864px] m-auto">
      {user && (
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
            <span className="text-sm text-slate-300">6 Publicações</span>
          </header>
          <Input type="text" placeholder="Buscar conteúdo" />
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </section>
  );
}
