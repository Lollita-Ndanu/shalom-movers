"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface LogoProps {
  isScrolled?: boolean;
}

export default function Logo({ isScrolled = true }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 12,
          delay: 0.05,
        }}
        className="relative flex-shrink-0"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Gold ring glow behind the icon */}
        <div className="absolute -inset-1 rounded-full bg-gold/10 blur-md animate-glow-pulse" />

        {/* Icon with gold ring */}
        <div className="relative z-10 rounded-full border-2 border-gold/60 p-[3px] bg-white/5 backdrop-blur-sm">
          <Image
            src="/images/logo1.png"
            alt="Shalom Movers"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full"
            priority
          />
        </div>

        {/* Shimmer sweep over the icon */}
        <span className="absolute inset-0 z-20 rounded-full overflow-hidden pointer-events-none">
          <span className="absolute top-0 left-[-100%] w-[30%] h-full bg-gradient-to-r from-transparent via-gold/40 to-transparent skew-x-[-20deg] animate-shimmer" />
        </span>
      </motion.div>

      {/* Text */}
      <Link
        href="/"
        className="flex flex-col leading-none"
        aria-label="Shalom Movers - Home"
      >
        <motion.span
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
            isScrolled ? "text-jungle" : "text-white"
          }`}
        >
          SHALOM
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.35 }}
          className="text-sm font-medium tracking-[0.2em] uppercase text-gold"
        >
          Movers
        </motion.span>
      </Link>
    </div>
  );
}
