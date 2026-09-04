"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const FAQS = [
  {
    question: "What areas do you cover?",
    answer:
      "We serve Nairobi and provide moving services across all major towns in Kenya. Whether you're moving within the city or relocating to another county, we've got you covered.",
  },
  {
    question: "How much does moving cost?",
    answer:
      "Costs depend on the volume of goods, distance, and any additional services like packing or storage. Contact us for a free, no-obligation quote tailored to your needs.",
  },
  {
    question: "Do you provide packing services?",
    answer:
      "Yes! Our professional team can handle all packing using high-quality materials to ensure your belongings arrive safely. We also offer partial packing if you'd prefer to pack some items yourself.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 1–2 weeks in advance, especially during peak moving seasons. However, we always try to accommodate last-minute requests whenever possible.",
  },
  {
    question: "Is my property insured during the move?",
    answer:
      "Absolutely. We offer insurance coverage for your belongings during transit. Our team takes every precaution, but insurance gives you added peace of mind.",
  },
  {
    question: "Do you offer storage solutions?",
    answer:
      "Yes, we provide secure short-term and long-term storage options if your new location isn't ready yet. Your items are stored in a clean, monitored facility.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onToggle}
        suppressHydrationWarning
        className="w-full flex items-center justify-between gap-3 py-4 text-left hover:text-jungle transition-colors duration-200"
      >
        <span className="text-sm sm:text-base font-medium text-gray-900">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
            isOpen
              ? "bg-jungle border-jungle"
              : "bg-transparent border-jungle text-jungle"
          }`}
        >
          <span
            className={`text-sm leading-none transition-colors duration-300 ${
              isOpen ? "text-white" : "text-jungle"
            }`}
          >
            {isOpen ? "−" : "+"}
          </span>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 pr-10 text-sm text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 1, 0.75]);

  const leftFaqs = FAQS.slice(0, 3);
  const rightFaqs = FAQS.slice(3, 6);

  return (
    <section
      ref={sectionRef}
      className="min-h-full flex flex-col items-center justify-center bg-white px-4 py-16 relative overflow-hidden">
      {/* Magnet Swing Background Bubbles */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Pair 1 — Top */}
        <div className="absolute top-[10%] left-[10%] animate-magnet-left-1">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-jungle/[0.06]" />
        </div>
        <div className="absolute top-[10%] right-[10%] animate-magnet-right-1">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-jungle/[0.06]" />
        </div>

        {/* Pair 2 — Middle */}
        <div className="absolute top-[48%] left-[5%] animate-magnet-left-2">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-jungle/[0.05]" />
        </div>
        <div className="absolute top-[48%] right-[5%] animate-magnet-right-2">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-jungle/[0.05]" />
        </div>

        {/* Pair 3 — Bottom */}
        <div className="absolute bottom-[12%] left-[8%] animate-magnet-left-3">
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-jungle/[0.04]" />
        </div>
        <div className="absolute bottom-[12%] right-[8%] animate-magnet-right-3">
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-jungle/[0.04]" />
        </div>
      </div>

      {/* Content */}
      <motion.div style={{ scale }} className="relative z-10 max-w-5xl w-full origin-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Everything you need to know about moving with Shalom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {/* Left Column */}
          <div>
            {leftFaqs.map((faq, i) => (
              <FaqItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightFaqs.map((faq, i) => (
              <FaqItem
                key={i + 3}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i + 3}
                onToggle={() => toggle(i + 3)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
