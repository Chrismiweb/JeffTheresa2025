import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "#story", label: "Our Story" },
  { to: "#when-where", label: "When & Where" },
  { to: "#dresscode", label: "Dress Code" },
  { to: "#rsvp", label: "R.S.V.P" },
  { to: "#registry", label: "Gift / Registry" },
];

export default function Sidebar({ onNavigate }) {
  return (
    <div className="flex flex-col gap-7 h-full w-full bg-[#FFF0F5] p-8">
      <div className="text-center pt-2">
        <div className="w-full flex justify-center items-center">
            <img src="/image/flower.png" className="h-[50px]" alt="" />
        </div>
        <div className="font-script text-3xl text-[#BD9458] mt-[20px]">Jeff &amp; Theresa</div>
        <div className="text-[12px] tracking-[0.3em] text-gray-500 mt-1">30.11.2025</div>
      </div>

      <ul className="flex flex-col gap-4">
        {links.map(({ to, label, end }) => (
          <li key={to}>
            <a
            href={to}
              end={end}
              onClick={onNavigate}
              className={({ isActive }) =>
                `inline-block transition  hover:opacity-70 ${
                  isActive ? "text-accent " : "text-gray-900 "
                }`
              }
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
