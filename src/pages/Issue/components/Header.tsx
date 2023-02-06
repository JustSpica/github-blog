import React from "react";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import {
  FaChevronLeft,
  FaGithub,
  FaComment,
  FaCalendarDay,
} from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export interface HeaderProps {
  comments: number;
  createdAt: string;
  githubRedirect: string;
  name: string;
  title: string;
}

export function Header({
  comments,
  createdAt,
  githubRedirect,
  name,
  title,
}: HeaderProps) {
  const publishedDateRelativeToNow = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <header className="w-full -mt-16 p-8 bg-slate-700 rounded-xl shadow-slate-900 shadow-lg">
      <nav className="w-full flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 uppercase font-bold text-xs text-blue-500 hover:underline"
        >
          <FaChevronLeft size={12} />
          Voltar
        </Link>
        <a
          href={githubRedirect}
          target="_blank"
          className="flex items-start gap-2 uppercase font-bold text-xs text-blue-500 hover:underline"
          rel="noreferrer"
        >
          Ver no Github <BsBoxArrowUpRight size={12} />
        </a>
      </nav>
      <h1 className="mt-5 text-2xl font-bold text-slate-50 leading-relaxed">
        {title}
      </h1>
      <div className="w-full mt-2 flex gap-8">
        <span className="flex items-center gap-2 text-slate-300">
          <FaGithub className="text-slate-400" size={18} />
          {name}
        </span>
        <span className="flex items-center gap-2 text-slate-300">
          <FaCalendarDay className="text-slate-400" size={18} />
          {publishedDateRelativeToNow}
        </span>
        <span className="flex items-center gap-2 text-slate-300">
          <FaComment className="text-slate-400" size={18} />
          {comments} comentários
        </span>
      </div>
    </header>
  );
}
