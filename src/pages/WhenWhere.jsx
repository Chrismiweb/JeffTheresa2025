import React from "react";
import EventCard from "../components/EventCard.jsx";

export default function WhenWhere() {
  return (
    <section id="when-where" className="font-serif bg-[#fbf8f6]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <p className="mt-2 text-4xl lg:text-4xl tracking-wide mb-[10px] text-[#BD9458]">WHEN & WHERE</p>
        {/* Your intro copy */}
        <p className="text-gray-700 max-w-3xl">
          Our ceremony will take place at the beautiful <strong>Chapel at Ana Villa</strong>,
          followed immediately by our reception at the same location.
        </p>

        {/* Reception card */}
        <div className="mt-8">
          <EventCard
            title="The Reception"
            imageUrl="https://images.unsplash.com/photo-1501084817091-22df3b6fb0be?q=80&w=1600&auto=format&fit=crop"
            address="Chapel at Ana Villa 5921 Stone Creek Dr. The Colony, TX 75056 (same location as the ceremony)"
            time="4:30 pm"
            // time="Immediately after the ceremony"

            date="November 30th, 2025"
            description="Following the ceremony, please join us for a cocktail hour, dinner, and dancing as we celebrate this special day together."
            mapsHref="https://www.google.com/maps/search/?api=1&query=Chapel+at+Ana+Villa"
          />
        </div>
      </div>
    </section>
  );
}
