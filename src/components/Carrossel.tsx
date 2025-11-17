"use client";

import React, { useState, ReactNode } from "react";

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
    <div className="w-full">
      <div className="relative overflow-hidden">
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
              <div className="z-10 w-full h-full flex items-center justify-center px-4">
                {Component}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
