"use client";
import { useState } from "react";
import affirmations from "./affirmations";

export default function Home() {
  const [affirmation, setAffirmation] = useState("");

  const runAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setAffirmation(affirmations[randomIndex]);
  };

  return (
    <div className="main-component">
      <div>{affirmation}</div>
      <button onClick={runAffirmation}>Get Affirmation</button>
    </div>
  );
}