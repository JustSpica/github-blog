import React from "react";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "react-query";
import { BiBuilding } from "react-icons/bi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub, FaUserFriends } from "react-icons/fa";

import { findUser } from "services/github";

export function Profile() {
  const { data: user, isLoading } = useQuery("users", () => findUser(), {
    refetchOnWindowFocus: false,
  });

  const haveAnyUser = !!user && Object.keys(user).length > 0;

  return isLoading || !haveAnyUser ? (
    <Skeleton
      baseColor="#112131"
      highlightColor="#1C2F41"
      className="w-full h-52 -mt-16 !block rounded-xl shadow-slate-900 shadow-lg cursor-not-allowed"
    />
  ) : (
    <div className="-mt-16 p-8 bg-slate-700 flex gap-8 rounded-xl shadow-slate-900 shadow-lg">
      <img
        className="w-36 h-36 bg-slate-50 rounded-lg"
        src={user?.avatar_url}
      />
      <div className="flex-1 flex flex-col justify-between">
        <header className="w-full flex justify-between">
          <strong className="font-bold text-2xl text-slate-50">
            {user?.name}
          </strong>
          <a
            href={user?.html_url}
            target="_blank"
            className="flex items-start gap-2 uppercase font-bold text-xs text-blue-500 hover:underline"
            rel="noreferrer"
          >
            Github <BsBoxArrowUpRight size={12} />
          </a>
        </header>
        <p className="text-slate-200 leading-relaxed">{user?.bio}</p>
        <footer className="w-full mt-6 flex gap-8">
          <span className="flex items-center gap-2 text-slate-100">
            <FaGithub className="text-slate-400" size={18} />
            {user?.login}
          </span>
          <span className="flex items-center gap-2 text-slate-100">
            <BiBuilding className="text-slate-400" size={18} />
            {user?.company}
          </span>
          <span className="flex items-center gap-2 text-slate-100">
            <FaUserFriends className="text-slate-400" size={18} />
            {user?.followers} seguidores
          </span>
        </footer>
      </div>
    </div>
  );
}
