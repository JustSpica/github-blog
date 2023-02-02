import React from "react";
import { useParams } from "react-router-dom";

import { Header } from "./components/Header";

export function Issue() {
  const { issueId } = useParams();

  return (
    <section className="w-full pb-12 max-w-[864px] m-auto">
      <Header />
    </section>
  );
}
