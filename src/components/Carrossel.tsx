"use client";

import React, { useState, ReactNode, useEffect } from "react";

interface CarrosselProps {
  slides: ReactNode[];
}

export default function Carrossel({ slides }: CarrosselProps) {
  const [index, setIndex] = useState(0);

  function goTo(next: number) {
    if (next < 0) return setIndex(slides.length - 1);
    if (next >= slides.length) return setIndex(0);
    setIndex(next);
  }

  function next() {
    goTo(index + 1);
  }

  return (
    <div className="w-full relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((Component, i) => (
          <div
            key={i}
            onClick={next}
            className="
              relative min-w-full h-screen flex items-center justify-center cursor-pointer select-none"
          >
            <div className="w-full h-full flex items-center justify-center">
              {Component}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 flex gap-2 z-40">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === index ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
