"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const COLUMNS = [
  {
    direction: "down" as const,
    items: ["/images/1.jpg", "/images/8.jpg", "/images/IMG_20251202_112736.jpg"],
  },
  {
    direction: "up" as const,
    items: ["/images/IMG_20251204_132615.jpg", "/images/IMG_20251204_114223.jpg", "/images/5.jpg"],
  },
  {
    direction: "down" as const,
    items: ["/images/3.jpg", "/images/IMG_20251202_112526.jpg", "/images/IMG_20251202_112800.jpg"],
  },
  {
    direction: "up" as const,
    items: ["/images/12.jpg", "/images/IMG_20251114_133059.jpg", "/images/10.jpg"],
  },
];

const BASELINE_DURATION = 120;

export default function GalleryPreview() {
  const [speed, setSpeed] = useState(0);
  const speedRef = useRef(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(performance.now());
  const rafRef = useRef<number>(0);

  const handleScroll = useCallback(() => {
    const now = performance.now();
    const dy = Math.abs(window.scrollY - lastScrollY.current);
    const dt = (now - lastTime.current) / 1000;

    if (dt > 0.01 && dy > 0.3) {
      const velocity = dy / dt;
      let target: number;

      if (velocity < 15) {
        target = 0.06;
      } else if (velocity < 200) {
        target = 0.06 + ((velocity - 15) / 185) * 0.14;
      } else if (velocity < 800) {
        target = 0.2 + ((velocity - 200) / 600) * 0.2;
      } else if (velocity < 3000) {
        target = 0.4 + ((velocity - 800) / 2200) * 0.15;
      } else {
        target = 0.55;
      }

      speedRef.current = speedRef.current * 0.88 + target * 0.12;
    }

    lastScrollY.current = window.scrollY;
    lastTime.current = now;
  }, []);

  useEffect(() => {
    const loop = () => {
      speedRef.current *= 0.982;
      setSpeed(speedRef.current);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isMoving = speed > 0.004;
  const clampedSpeed = Math.max(0.001, Math.min(1, speed));
  const duration = BASELINE_DURATION / clampedSpeed;

  return (
    <section className="min-h-full flex flex-col items-center justify-center bg-white overflow-hidden px-4 py-16">
      <style>{`
        @keyframes scroll-down {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-up {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .gallery-col {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      <div className="max-w-7xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Work in Action
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Real moves, real care. A glimpse into how we handle every relocation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-h-[60vh] overflow-hidden">
          {COLUMNS.map((col, colIdx) => (
            <div
              key={colIdx}
              className="gallery-col flex flex-col gap-3 sm:gap-4"
              style={{
                animationName:
                  col.direction === "down" ? "scroll-down" : "scroll-up",
                animationDuration: `${duration * (1 + colIdx * 0.06)}s`,
                animationPlayState: isMoving ? "running" : "paused",
              }}
            >
              {[...col.items, ...col.items, ...col.items, ...col.items].map(
                (src, i) => (
                  <div
                    key={`c${colIdx}-${i}`}
                    className="flex-shrink-0 w-full aspect-[4/3] rounded-xl overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={320}
                      height={240}
                      className="w-full h-full object-cover"
                      unoptimized
                      loading="eager"
                    />
                  </div>
                )
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-jungle hover:text-gold-dark font-semibold transition-colors duration-200"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
