"use client";
import React from "react";

import { useState, useEffect } from "react";

const useTypingEffect = (text: any, duration: any) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const characters = text.split("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPosition((prevPosition) => {
        if (prevPosition < characters.length - 1) {
          return prevPosition + 1;
        } else {
          return prevPosition; // Stop when we reach the end of the paragraph
        }
      });
    }, duration);

    return () => clearInterval(intervalId);
  }, [characters, duration]);

  return characters.slice(0, currentPosition + 1).join("");
};

const paragraph = `Hi, I'm Dias... \n\nWelcome to Sri Lanka! Just landed, huh? That mix of excitement and a tiny bit of nervousness you're feeling is totally normal. It's part of the adventure, and trust me, you're in for a treat. Sri Lanka isn't just about stunning landscapes; it's about experiences that tug at your heart, challenging and changing you in the best ways possible. And kite surfing? Well, it's the magic that ties it all together, and I'm here to guide you through it.\n\nYou see, I'm not your typical instructor. Imagine learning kite surfing from someone who feels more like an old friend than a coach. That's me. I'm here to give you more than just lessons; I'm here to give you memories that stick with you, way after you've left our shores. And don't worry about the nitty-gritty—safety, quality equipment, and those local secrets for the best spots to chill and explore are all part of the package.\n\nNow, let's address those little worries you might have. Not picking up as fast as you'd hoped? Remember, every master was once a beginner. Feeling awkward about navigating a new culture? Let's turn those moments into stories we'll laugh about later. Concerned about equipment or the unpredictable weather? I've got you covered with top-notch gear and a plan for every scenario.\n\nFeeling alone or swamped by the logistics of travel? Here's where the magic of friendship comes in. I'm not just here to teach you kite surfing; I'm here to be your friend, your guide to connecting with others, and your shortcut to the best this island has to offer, without the hassle.\n\nSo, what do you say? Ready to transform those jitters into unstoppable joy and those concerns into confidence? I promise you a holiday filled with discovery, laughter, and the kind of adventures that become the best stories. Welcome to your new favorite chapter. Welcome, my friend, to Sri Lanka.`;

export const TypingEffectComponent = () => {
  const typedText = useTypingEffect(paragraph, 50); // Use your paragraph variable here
  // Split the typed text to manage the first two words differently
  const firstTwoWords = typedText.split(" ").slice(0, 2).join(" ");
  const restOfText = typedText.substring(firstTwoWords.length);

  // Handling line breaks in the rest of the text
  const restOfTextWithLineBreaks = restOfText
    .split("\n")
    .map((line: any, index: any) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));

  return (
    <div>
      <span style={{ fontSize: "24px", fontWeight: "bold" }}>
        {firstTwoWords}
      </span>
      <span style={{ fontSize: "18px" }}>{restOfTextWithLineBreaks}</span>
    </div>
  );
};

const HowWeWork = () => {
  return (
    <section id="services" className=" text-green-90 mt-5 mb-5">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <h2 className=" flex items-center flex-col text-3xl font-bold sm:text-4xl mb-16">
          How We Work?
        </h2>
        <div className="mx-auto max-w-full text-green-90 font-medium text-xl text-left">
          <TypingEffectComponent />
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
