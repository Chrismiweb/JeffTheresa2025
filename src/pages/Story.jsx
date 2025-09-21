// src/pages/Story.jsx
import React from "react";

export default function Story() {
  return (
    <section id="story" className="font-serif">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[400px_1fr] gap-10 lg:gap-14 items-start">
          {/* Left: Photo block */}
          <div className="relative">
            {/* dotted background */}
            <div
              aria-hidden
              className="absolute -left-10 -top-10 -right-10 -bottom-10 -z-10
                         bg-[radial-gradient(#ead9c7_1.2px,transparent_1.2px)]
                         [background-size:16px_16px]"
            />
            {/* photo + white frame */}
            <div className="relative inline-block bg-white p-3 shadow-sm">
              <img
                src="/image/t and j.png"
                alt="The couple on our special day"
                className="block w-[300px] h-auto object-cover"
              />
              {/* circular text badge (top-right) */}
              <div className="absolute -right-12 -top-10 mix-blend-normal">
                <svg width="150" height="150" viewBox="0 0 200 200">
                  <defs>
                    <path id="circlePath" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
                  </defs>
                  <text
                    className="uppercase tracking-[0.35em]"
                    fill="white"
                    fontSize="12"
                    letterSpacing="3"
                  >
                    <textPath href="#circlePath" startOffset="0%">
                      OLIVIA & ENRICO • 15.11.2025 •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* gold L-frame (right + bottom) */}
              <div className="pointer-events-none absolute -right-8 -bottom-8 w-full h-full border-r-8 border-b-8 border-accent" />
            </div>
          </div>

          {/* Right: Text content */}
          <div className="pt-2">
            <div className="flex items-center gap-4">
              <span className="font-script text-[#BD9458] text-3xl leading-none">
                Our love.
              </span>
            </div>

            <h2 className="mt-2 text-4xl lg:text-4xl tracking-wide">
              OUR STORY
            </h2>

            <div className="mt-6 space-y-6 text-gray-700 leading-8">
              <p>
               We first met at church, where we happened to sit next to each other during service—and quickly realized we found the same things funny. From that moment, a friendship began to grow. We served together at church and even started training at the gym side by side.
              </p>

              <p>
                Those early days of laughter, service, and friendship laid the foundation for the beautiful relationship we share today. From the very beginning, Christ has been at the center of our journey.
              </p>

              <p>
                Now, we laugh together, travel together, and continue to grow together. Most of all, we cannot wait to spend the rest of our lives together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
