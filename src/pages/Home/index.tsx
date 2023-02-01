import React from "react";

import { Input } from "./components/Input";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";

export function Home() {
  return (
    <section className="w-full pb-12 max-w-[864px] m-auto">
      <Profile />
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
