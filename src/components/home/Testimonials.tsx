"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Shalom Movers made our family's relocation so smooth. Professional, punctual, and they handled our furniture with great care.",
    name: "Grace M.",
    location: "Nairobi",
    rating: 5,
    photo: "/images/Screenshot_2026-04-28-14-09-21-705_com.whatsapp.w4b.jpg",
  },
  {
    quote: "Office move was seamless — minimal downtime, everything arrived intact. Highly recommend their team.",
    name: "James K.",
    location: "Mombasa",
    rating: 4.5,
    photo: "/images/IMG-20260509-WA0036(2).jpg",
  },
  {
    quote: "From packing to transport, they were exceptional. Affordable rates and excellent service. Will definitely use them again.",
    name: "Aisha W.",
    location: "Kisumu",
    rating: 5,
    photo: "/images/Screenshot_2026-04-28-14-09-51-641_com.whatsapp.w4b.jpg",
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="flex items-center justify-center md:justify-start gap-0.5">
      {Array.from({ length: fullStars }).map((_, j) => (
        <Star key={`full-${j}`} className="w-5 h-5 fill-gold text-gray-800" />
      ))}
      {hasHalf && (
        <span className="relative inline-block w-5 h-5">
          <Star className="absolute w-5 h-5 text-gray-300 fill-gray-200" />
          <span className="absolute inset-0 overflow-hidden w-[50%]">
            <Star className="w-5 h-5 fill-gold text-gray-800" />
          </span>
        </span>
      )}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const t = TESTIMONIALS[current];

  return (
    <section className="relative overflow-hidden min-h-full flex flex-col items-center justify-center bg-gray-50 px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 sm:h-20 lg:h-24">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M0,80 C240,20 480,140 720,80 C960,20 1200,140 1440,80 L1440,0 L0,0 Z"
            className="fill-jungle-dark"
          />
        </svg>
      </div>
      <div className="max-w-5xl w-full">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Real experiences from happy customers across Kenya.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-14"
            >
              {/* Left — Quote */}
              <div className="flex-1 flex flex-col items-center md:items-start space-y-5">
                <StarRating rating={t.rating} />

                <div className="relative">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-gold/30 mb-1 scale-x-[-1]" />
                  <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed italic px-2 sm:px-0">
                    {t.quote}
                  </blockquote>
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-gold/30 ml-auto mr-2 sm:mr-0" />
                </div>
              </div>

              {/* Right — Profile */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full animate-ring-glow" />
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-[3px] border-gold">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={224}
                      height={224}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="mt-5 text-lg font-bold text-gray-900">
                  {t.name}
                </p>
                <p className="text-sm text-gray-500 mt-0.5">{t.location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-14">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                suppressHydrationWarning
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-gold w-8"
                    : "bg-gray-300 hover:bg-gray-400 w-2.5"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
