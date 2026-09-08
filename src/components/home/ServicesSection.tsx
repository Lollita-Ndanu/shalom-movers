"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Building2, Truck, Camera, Droplets, Sparkles } from "lucide-react";

const CARD_DEAL = [
  { x: -220, y: -200 },
  { x: 0, y: -220 },
  { x: 220, y: -200 },
  { x: -220, y: 200 },
  { x: 0, y: 220 },
  { x: 220, y: 200 },
];

const SERVICES = [
  {
    title: "Home Relocation",
    icon: Home,
    desc: "Full-service residential moves across Kenya.",
    media: "https://shalom-movers-media.s3.eu-north-1.amazonaws.com/videos/VID_20251220_120113.mp4",
    isVideo: true,
  },
  {
    title: "Office Moves",
    icon: Building2,
    desc: "Minimal downtime for your business relocation.",
    media: "/images/OFFICE.jpg",
    isVideo: false,
  },
  {
    title: "Goods Transport",
    icon: Truck,
    desc: "Safe, reliable delivery of goods nationwide.",
    media: "/images/IMG_20251220_105328.jpg",
    isVideo: false,
  },
  {
    title: "CCTV Installation",
    icon: Camera,
    desc: "Professional security camera systems.",
    media: "/images/CCTV.jpg",
    isVideo: false,
  },
  {
    title: "Water Filters",
    icon: Droplets,
    desc: "Clean water solutions for homes & offices.",
    media: "/images/water-filter.jpeg",
    isVideo: false,
  },
  {
    title: "Cleaning",
    icon: Sparkles,
    desc: "Thorough move-in & move-out cleaning services.",
    media: "/images/IMG_20251204_143807.jpg",
    isVideo: false,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title — clip reveal from center */}
        <motion.div
          initial={{ clipPath: "inset(0 50% 0 50%)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
        </motion.div>

        {/* Subtitle — same clip reveal, delayed */}
        <motion.div
          initial={{ clipPath: "inset(0 50% 0 50%)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="text-center mt-4"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive moving and related solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Cards — stack deal from center */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{
                x: CARD_DEAL[i].x,
                y: CARD_DEAL[i].y,
                scale: 0.35,
                opacity: 0,
              }}
              whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                mass: 1,
                delay: 0,
              }}
              className="group relative h-60 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-gold/10 transition-shadow duration-500"
            >
              {/* Media background */}
              {service.isVideo ? (
                <video
                  src={service.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="absolute inset-0 z-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <Image
                  src={service.media}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gold/20 text-gold backdrop-blur-sm">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed pl-12">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button — slide up */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-jungle text-jungle hover:bg-jungle hover:text-white text-sm font-semibold transition-all duration-300 group"
          >
            View More Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
