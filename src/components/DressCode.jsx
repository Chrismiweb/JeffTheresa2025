import React from "react";

export default function DressCode() {
  return (
    <section id="dresscode" className="relative font-serif">
      {/* soft dotted background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(#ead9c7_1.2px,transparent_1.2px)] [background-size:16px_16px]"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        {/* Heading */}
        <div className="text-center">
          <div className="font-script text-accent text-[#BD9458] text-3xl">Dress Code</div>
          <h2 className="mt-2 text-4xl lg:text-5xl tracking-wide">Formal Attire Only</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-8 text-lg">
            This is a strictly formal event. Attire in <strong>black</strong>,{" "}
            <strong>black &amp; white</strong>, or <strong>gold</strong> only.
          </p>
        </div>

        {/* Swatches */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {/* Black */}
          <div className="bg-white border border-gray-200 p-6 shadow-sm">
            <div className="h-28 w-full bg-[#111111]" />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Black</h3>
              {/* <p className="text-gray-600 text-sm">Classic tuxes, evening gowns, formal suits.</p> */}
            </div>
          </div>

          {/* Black & White */}
          <div className="bg-white border border-gray-200 p-6 shadow-sm">
            <div className="h-28 w-full bg-[linear-gradient(135deg,#111_0%,#111_50%,#ffffff_50%,#ffffff_100%)]" />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Black &amp; White</h3>
              {/* <p className="text-gray-600 text-sm">Monochrome looks with elegant contrast.</p> */}
            </div>
          </div>

          {/* Gold */}
          <div className="bg-white border border-gray-200 p-6 shadow-sm">
            <div className="h-28 w-full bg-[#D4AF37]" />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Gold</h3>
              {/* <p className="text-gray-600 text-sm">Metallic or matte gold formalwear & accessories.</p> */}
            </div>
          </div>
        </div>

        {/* Optional note (remove if you want only the exact line) */}
        {/* <p className="mt-8 text-center text-gray-500 text-sm tracking-wide">
          Please keep accessories refined and elegant.
        </p> */}
      </div>
    </section>
  );
}
