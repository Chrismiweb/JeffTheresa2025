import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { LuTimer } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
export default function EventCard({
  title,
  imageUrl,
  address,
  date,
  time,
  description,
  mapsHref = "#",
}) {
  return (
    <div className="grid md:grid-cols-[420px_1fr] gap-6 md:gap-10 items-start">
      {/* Left image */}
      <div className="w-full">
        <img
          src="/image/hall.png"
          alt={title}
          className="w-full h-[240px] md:h-[260px] object-cover"
        />
      </div>

      {/* Right content */}
      <div>
        <h3 className="uppercase tracking-wide text-2xl font-semibold">
          {title}
        </h3>

        <div className="mt-4 space-y-3 text-gray-700">
          <div className="flex items-center gap-3">
            {/* location icon */}
            <FaLocationDot className="text-[25px]"/>
            <span>{address}</span>
          </div>
          <div className="flex items-center gap-3">
            {/* location icon */}
            <FaCalendarAlt className="text-[22px]"/>
            <span>{date}</span>
           </div>

          <div className="flex items-center gap-3">
            {/* clock icon */}
            <LuTimer className="text-[25px]"/>
            <span>{time}</span>
          </div>
        </div>

        <p className="mt-4 text-gray-600 leading-7">{description}</p>

        <a
          href={mapsHref}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-[#BD9458] hover:text-[#fbb348]"
        >
          See location <span aria-hidden>›</span>
        </a>
      </div>
    </div>
  );
}
