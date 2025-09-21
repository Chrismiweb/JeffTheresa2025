import React from "react";
import { GiButterflyFlower } from "react-icons/gi";

export default function IntroBanner({
  names = "Olivia & Enrico",
  date = "December 15, 2026",
  location = "New York, Brooklyn",
}) {
  return (
    <section className="bg-[#fbf8f6] py-16 sm:py-20 lg:py-24 font-serif">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Leaf ornament */}
        <Leaf className="mx-auto h-8 w-16 text-gray-500" />

        {/* Names in script */}
        <h1 className="mt-4 font-script text-3xl sm:text-4xl lg:text-5xl text-gray-900">
          {names}
        </h1>

        {/* Date • Location (italic serif) */}
        <p className="mt-3 text-lg sm:text-xl lg:text-2xl italic text-gray-500">
          {date} – {location}
        </p>
      </div>
    </section>
  );
}

function Leaf({ className = "" }) {
  // Simple line-art leaf; inherits currentColor
  return (
    <div className="w-full flex justify-center items-center">
        <img src="/image/flower.png" className="h-[50px]" alt="" />
    </div>
  );
}
