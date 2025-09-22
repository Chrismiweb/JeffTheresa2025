// import React from "react";
// import { NavLink } from "react-router-dom";

// const links = [
//   { to: "/", label: "Home", end: true },
//   { to: "#story", label: "Our Story" },
//   { to: "#when-where", label: "When & Where" },
//   { to: "#dresscode", label: "Dress Code" },
//   { to: "#rsvp", label: "R.S.V.P" },
//   { to: "#registry", label: "Gift / Registry" },
// ];

// export default function Sidebar({ onNavigate }) {
//   return (
//     <div className="flex flex-col gap-7 h-full w-full bg-[#FFF0F5] p-8">
//       <div className="text-center pt-2">
//         <div className="w-full flex justify-center items-center">
//             <img src="/image/flower.png" className="h-[50px]" alt="" />
//         </div>
//         <div className="font-script text-3xl text-[#BD9458] mt-[20px]">Jeff &amp; Theresa</div>
//         <div className="text-[12px] tracking-[0.3em] text-gray-500 mt-1">30.11.2025</div>
//       </div>

//       <ul className="flex flex-col gap-4">
//         {links.map(({ to, label, end }) => (
//           <li key={to}>
//             <a
//             href={to}
//               end={end}
//               onClick={onNavigate}
//               className={({ isActive }) =>
//                 [
//                   "inline-block w-full",
//                   "px-1 py-2",                      // larger click area
//                   "text-lg lg:text-xl",            // increased font size
//                   "tracking-wide",                 // elegant spacing
//                   "transition hover:opacity-80",
//                   isActive ? "text-accent" : "text-gray-900",
//                 ].join(" ")
//               }
//             >
//               {label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React from "react";

const links = [
  { to: "#home",        label: "Home" },
  { to: "#story",       label: "Our Story" },
  { to: "#when-where",  label: "When & Where" },
  { to: "#dresscode",   label: "Dress Code" },
  { to: "#rsvp",        label: "R.S.V.P" },
  { to: "#registry",    label: "Gift / Registry" },
];

export default function Sidebar({ onNavigate }) {
  const handleClick = (e, hash) => {
    e.preventDefault();
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update URL hash without triggering a hard navigation
      history.replaceState(null, "", `/#${id}`);
    }
    onNavigate?.(); // close mobile drawer if provided
  };

  return (
    <div className="flex flex-col gap-7 h-full w-full bg-[#FFF0F5] p-4">
      <div className="text-center pt-2">
        <div className="w-full flex justify-center items-center">
          <img src="/image/flower.png" className="h-[50px]" alt="" />
        </div>
        <div className="font-script text-3xl text-[#BD9458] mt-[20px]">
          Jeff &amp; Theresa
        </div>
        <div className="text-[12px] tracking-[0.3em] text-gray-500 mt-1">
          30.11.2025
        </div>
      </div>

      <ul className="flex flex-col gap-2">
        {links.map(({ to, label }) => (
          <li key={to}>
            <a
              href={to}                         // e.g. "#story"
              onClick={(e) => handleClick(e, to)}
              className="inline-block w-full px-1 py-2
                         text-lg lg:text-xl tracking-wide
                         text-gray-900 hover:opacity-80 transition"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
