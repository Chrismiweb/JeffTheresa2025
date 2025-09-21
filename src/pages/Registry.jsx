// src/pages/Registry.jsx
import React from "react";

export default function Registry() {
  // Replace hrefs with your actual registry URLs
  const registries = [

    {
      name: "Amazon",
      href: "https://www.amazon.com/wedding/registry/PYG4CZXGAGZS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
  ];

  const registryHubHref = "https://www.amazon.com/wedding/registry/PYG4CZXGAGZS"; // e.g., "https://www.zola.com/registry/yourname"

  return (
    <section id="registry" className="font-serif">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24 text-center">
        {/* birds + hanging sign */}
        <div className="mx-auto w-fit">
          {/* birds */}
          <svg
            viewBox="0 0 120 60"
            className="mx-auto h-10 text-[#BD9458]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M29 37c7 0 12-5 12-12 0-7-6-12-12-12-4 0-7 2-9 4-4-1-7 0-7 0 1 5 5 9 10 10 0 5 3 10 6 10z" />
            <path d="M91 37c-7 0-12-5-12-12 0-7 6-12 12-12 4 0 7 2 9 4 4-1 7 0 7 0-1 5-5 9-10 10 0 5-3 10-6 10z" />
            <circle cx="60" cy="12" r="3" />
          </svg>
          {/* stick */}
          <div className="mx-auto h-6 w-[2px] bg-[#BD9458]" />
          {/* sign */}
          <div className="bg-[#F2EADE] border border-[#cfe1de] px-8 sm:px-12 py-4 sm:py-5">
            <h1 className="font-script text-3xl sm:text-4xl text-gray-700">
              Gift Registry
            </h1>
          </div>
        </div>

        {/* copy */}
        <p className="mt-10 sm:mt-12 max-w-4xl mx-auto text-gray-600 leading-8 text-lg">
          Your presence is the greatest gift of all, but if you’d like to bless
          us further, you can visit our wedding registry{" "}
          <button></button>
          <a
            href={registryHubHref}
            className="text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-800"
            target="_blank"
            rel="noreferrer"
          >
            CLICK HERE
          </a>
          .
        </p>

        {/* logos grid */}
        <div className="mt-9 w-full justify-center items-center flex">
          {registries.map((r) => (
            <a
              key={r.name}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              className="group border border-gray-300 aspect-[3/1] grid place-items-center p-6 hover:shadow-md transition"
              aria-label={r.name}
            >
              <img
                src={r.logo}
                alt={r.name + ' logo'}
                className="h-14 sm:h-16 md:h-20 object-contain opacity-90 group-hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
