import React, { InputHTMLAttributes } from "react";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {}

export function Input(props: InputProps) {
  return (
    <input
      className="w-full mt-3 py-3 px-4 text-slate-200 bg-slate-900 border border-slate-500 rounded-md focus:outline-none focus:border-blue-500 placeholder:text-slate-400 transition-colors"
      {...props}
    />
  );
}
