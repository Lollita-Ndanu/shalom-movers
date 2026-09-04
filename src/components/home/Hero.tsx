"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const VIDEO_SOURCES = [
  "https://shalom-movers-media.s3.eu-north-1.amazonaws.com/videos/bg2.mp4",
  "https://shalom-movers-media.s3.eu-north-1.amazonaws.com/videos/bg3.mp4",
  "https://shalom-movers-media.s3.eu-north-1.amazonaws.com/videos/Bg1.mp4",
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const idx = currentIdx;
    const video = videoRefs.current[idx];
    if (!video) return;

    const handleEnded = () => {
      setCurrentIdx((prev) => (prev + 1) % VIDEO_SOURCES.length);
    };

    video.addEventListener("ended", handleEnded);
    video.play().catch(() => {});

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [currentIdx]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {VIDEO_SOURCES.map((src, i) => (
        <video
          key={src}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          src={src}
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === currentIdx ? "opacity-100 z-[1]" : "opacity-0 z-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-4xl">
          Trusted Movers in Kenya
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gold font-medium max-w-2xl">
          &ldquo;We settle you in.&rdquo;
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gold hover:bg-gold-light text-jungle-dark text-base font-semibold transition-all duration-300 shadow-xl shadow-gold/20 hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
          <a
            href="tel:0751-794728"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border-2 border-white/40 text-white hover:border-gold hover:text-gold text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
