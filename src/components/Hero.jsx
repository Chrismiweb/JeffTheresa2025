import React from "react";
import { GiSelfLove } from "react-icons/gi";
export default function Hero() {
  return (
    <div id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-60 "
        src="/image/t and j.png"
        alt="Wedding background"
      />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-script text-[clamp(48px,5vw,120px)] leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
          Jeff kekombe <br/> &amp; <br/> Theresa Tshisekedi
        </h1>
        <p className="mt-3 tracking-[0.35em] text-[clamp(12px,2vw,16px)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
          30 NOVEMBER, 2025 — TEXAS
        </p>
        <a href="/rsvp" className="mt-6 inline-grid place-items-center border-white/80 backdrop-blur-sm transition">
          <GiSelfLove className="text-[40px]" />
        </a>
        <div className="w-full flex flex-col gap-[20px] lg:flex-row justify-center items-center mt-6 lg:gap-[30px]">
            <a href="#rsvp" className="bg-[#BD9458] hover:bg-[#8b6123] text-white
             px-[40px] py-[10px] text-[20px] cursor-pointer
             transition-colors duration-200 ease-out
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#BD9458]">RSVP</a>
            <a href="#registry" className="bg-[#BD9458] hover:bg-[#8b6123] text-white
             px-[40px] py-[10px] text-[20px] cursor-pointer
             transition-colors duration-200 ease-out
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#BD9458]">GIFT</a>
        </div>
      </div>
    </div>
  );
}
