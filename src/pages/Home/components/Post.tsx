import React from "react";

export interface PostProps {
  title: string;
  createdAt: string;
  description: string;
}

export function Post({ createdAt, description, title }: PostProps) {
  return (
    <div className="max-h-[253px] p-8 bg-slate-600 rounded-lg cursor-pointer hover:outline hover:outline-slate-400 transition-all">
      <header className="w-full flex gap-4">
        <strong className="w-[283px] text-xl text-slate-50 leading-relaxed">
          {title}
        </strong>
        <span className="text-sm text-slate-300">Há 1 dia</span>
      </header>
      <p className="mt-5 text-slate-200 line-clamp-4">{description}</p>
    </div>
  );
}
