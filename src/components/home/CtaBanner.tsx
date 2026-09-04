"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CtaBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.3]);

  return (
    <section
      ref={sectionRef}
      className="min-h-full flex flex-col items-center justify-center bg-gold px-4 py-16 relative overflow-hidden"
    >
      {/* Box overlay — left side */}
      <motion.div
        className="absolute left-0 bottom-0 pointer-events-none select-none"
        style={{ scale }}
      >
        <Image
          src="/images/Box.png"
          alt="Moving box"
          width={360}
          height={300}
          className="w-auto h-40 sm:h-56 md:h-72 lg:h-80 object-contain opacity-80"
        />
      </motion.div>

      {/* Lorry overlay — right side */}
      <motion.div
        className="absolute right-0 bottom-0 pointer-events-none select-none"
        style={{ scale }}
      >
        <Image
          src="/images/lorry.png"
          alt="Shalom Movers truck"
          width={480}
          height={320}
          className="w-auto h-48 sm:h-64 md:h-80 lg:h-96 object-contain opacity-80"
        />
      </motion.div>

      {/* Gradient fade to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/80 to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="text-center relative z-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-jungle-dark">
          Ready to make your move?
        </h2>
        <p className="mt-4 text-jungle-dark/70 text-lg">
          Let us settle you in. Get a free quote today.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-jungle-dark hover:bg-jungle text-white text-base font-semibold transition-all duration-300 shadow-xl shadow-jungle-dark/20 hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
          <a
            href="tel:0751-794728"
            className="text-jungle-dark hover:text-jungle text-lg font-semibold transition-colors duration-200"
          >
            Or call 0751-794728
          </a>
        </div>
      </div>
    </section>
  );
}
