import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BiBuilding } from "react-icons/bi";
import { FaGithub, FaUserFriends } from "react-icons/fa";

export interface ProfileRootProps {
  children: React.ReactNode;
}

export function Root({ children }: ProfileRootProps) {
  return (
    <div className="-mt-16 p-8 bg-slate-700 flex gap-8 rounded-xl shadow-slate-900 shadow-lg">
      {children}
    </div>
  );
}

export interface ProfileAvatarProps {
  url: string;
}

export function Avatar({ url }: ProfileAvatarProps) {
  return <img className="w-36 h-36 bg-slate-50 rounded-lg" src={url} />;
}

export interface ProfileContentProps {
  children: React.ReactNode;
}

export function Content({ children }: ProfileContentProps) {
  return <div className="flex-1 flex flex-col justify-between">{children}</div>;
}

export interface ProfileHeaderDataProps {
  github: string;
  name: string;
}

export function HeaderData({ github, name }: ProfileHeaderDataProps) {
  return (
    <header className="w-full flex justify-between">
      <strong className="font-bold text-2xl text-slate-50">{name}</strong>
      <a
        href={github}
        target="_blank"
        className="flex items-start gap-2 uppercase font-bold text-xs text-blue-500 hover:underline"
        rel="noreferrer"
      >
        Github <BsBoxArrowUpRight size={12} />
      </a>
    </header>
  );
}

export interface ProfileDescriptionProps {
  children: string;
}

export function Description({ children }: ProfileDescriptionProps) {
  return <p className="text-slate-200 leading-relaxed">{children}</p>;
}

export interface ProfileFooterDataProps {
  company: string;
  followers: number;
  nick: string;
}

export function FooterData({
  company,
  followers,
  nick,
}: ProfileFooterDataProps) {
  return (
    <footer className="w-full mt-6 flex gap-8">
      <span className="flex items-center gap-2 text-slate-100">
        <FaGithub className="text-slate-400" size={18} />
        {nick}
      </span>
      <span className="flex items-center gap-2 text-slate-100">
        <BiBuilding className="text-slate-400" size={18} />
        {company}
      </span>
      <span className="flex items-center gap-2 text-slate-100">
        <FaUserFriends className="text-slate-400" size={18} />
        {followers} seguidores
      </span>
    </footer>
  );
}
