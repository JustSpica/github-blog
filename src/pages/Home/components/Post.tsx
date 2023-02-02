import React, { ButtonHTMLAttributes } from "react";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export interface PostProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  createdAt: string;
  description: string;
}

export function Post({ createdAt, description, title, ...props }: PostProps) {
  const publishedDateRelativeToNow = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <button
      {...props}
      className="max-h-[253px] p-8 text-left bg-slate-600 rounded-lg cursor-pointer hover:outline hover:outline-slate-400 transition-all"
    >
      <header className="w-full flex gap-4">
        <strong className="w-[283px] text-xl text-slate-50 line-clamp-2 leading-relaxed">
          {title}
        </strong>
        <span className="text-sm text-slate-300">
          {publishedDateRelativeToNow}
        </span>
      </header>
      <p className="mt-5 text-slate-200 line-clamp-4">{description}</p>
    </button>
  );
}
