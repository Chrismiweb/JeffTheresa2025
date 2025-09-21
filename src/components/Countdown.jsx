import React, { useEffect, useMemo, useState } from "react";

function nextOccurrence({ month = 11, day = 30, hour = 0, minute = 0, second = 0 }) {
  // month is 1–12 (11 = November)
  const now = new Date();
  let y = now.getFullYear();
  let target = new Date(y, month - 1, day, hour, minute, second);
  if (target <= now) target = new Date(y + 1, month - 1, day, hour, minute, second);
  return target;
}

function diffParts(target) {
  const ms = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return { days, hours, minutes, seconds, done: ms === 0 };
}

function Block({ value, label }) {
  const v = label === "DAYS" ? String(value) : String(value).padStart(2, "0");
  return (
    <div className="text-center">
      <div className="tabular-nums font-bold text-white text-6xl sm:text-7xl lg:text-8xl leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
        {v}
      </div>
      <div className="mt-3 tracking-[0.35em] text-white/85 text-xs sm:text-sm">
        {label}
      </div>
    </div>
  );
}


export default function Countdown({
  month = 11,
  day = 30,
  hour = 0,
  minute = 0,
  second = 0,
  title = "We will become a family in",
  bgUrl = "/image/man-proposed-marriage.jpg",
}) {
  const target = useMemo(() => nextOccurrence({ month, day, hour, minute, second }), [month, day, hour, minute, second]);
  const [t, setT] = useState(() => diffParts(target));

  useEffect(() => {
    const id = setInterval(() => setT(diffParts(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const weddingIsToday = target.getTime() - Date.now() <= 0;

  return (
    <section className="relative min-h-[55vh] grid place-items-center overflow-hidden font-serif">
      {/* Background */}
      <img src={bgUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="font-script text-white text-3xl sm:text-4xl lg:text-5xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
          {weddingIsToday ? "Today we become a family" : title}
        </h2>

        {!weddingIsToday && (
          <div className="mt-6 sm:mt-8 flex items-end justify-center gap-6 sm:gap-10 lg:gap-14">
            <Block value={t.days} label="DAYS" />
            <Block value={t.hours} label="HOURS" />
            <Block value={t.minutes} label="MINUTES" />
            <Block value={t.seconds} label="SECONDS" />
          </div>
        )}
      </div>
    </section>
  );
}
