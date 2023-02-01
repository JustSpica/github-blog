import React from "react";
import { Outlet } from "react-router-dom";

import logoImage from "assets/svgs/logo.svg";

export function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header
        className="w-full h-[296px] flex items-center justify-center 
        bg-header bg-no-repeat bg-cover"
      >
        <img src={logoImage} alt="Símbolo de código com o título Github Blog" />
      </header>
      <main className="w-full flex-1 bg-slate-800">
        <Outlet />
      </main>
    </div>
  );
}
