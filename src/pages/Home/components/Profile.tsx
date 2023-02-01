import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BiBuilding } from "react-icons/bi";
import { FaGithub, FaUserFriends } from "react-icons/fa";

export function Profile() {
  return (
    <div
      className="-mt-16 p-8 bg-slate-700 flex gap-8 rounded-xl 
    shadow-slate-900 shadow-lg"
    >
      <img className="w-36 h-36 bg-slate-50 rounded-lg" src="" alt="" />
      <div className="flex-1 flex flex-col justify-between">
        <header className="w-full flex justify-between">
          <strong className="font-bold text-2xl text-slate-50">
            Cameron Williamson
          </strong>
          <a
            className="flex items-start gap-2 uppercase font-bold text-xs 
          text-blue-500"
          >
            Github <BsBoxArrowUpRight size={12} />
          </a>
        </header>
        <p className="text-slate-200 leading-relaxed">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <footer className="w-full mt-6 flex gap-8">
          <span className="flex items-center gap-2 text-slate-100">
            <FaGithub className="text-slate-400" size={18} />
            cameronwll
          </span>
          <span className="flex items-center gap-2 text-slate-100">
            <BiBuilding className="text-slate-400" size={18} />
            Rocketseat
          </span>
          <span className="flex items-center gap-2 text-slate-100">
            <FaUserFriends className="text-slate-400" size={18} />
            32 seguidores
          </span>
        </footer>
      </div>
    </div>
  );
}
