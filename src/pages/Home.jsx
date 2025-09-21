import React from "react";
import Hero from "../components/Hero.jsx";
import Rsvp from "./Rsvp.jsx";
import Story from "./Story.jsx";
import Countdown from "../components/Countdown.jsx";
import WhenWhere from "./WhenWhere.jsx";
import Registry from "./Registry.jsx";
import DressCode from "../components/DressCode.jsx";
import IntroBanner from "../components/IntroBanner.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Story/>
      <Countdown/>
      <WhenWhere/>
      <DressCode/>
      <Rsvp/>
      <Registry/>
      <IntroBanner
      names="Jeff & Theresa"
        date="November 30, 2025"
        location="Texas"
      />
      {/* If you later want “sections under the hero”, keep them on this page. */}
    </>
  );
}

