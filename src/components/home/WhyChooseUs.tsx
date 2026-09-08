import { Settings, Shield, Heart } from "lucide-react";

const BENEFITS = [
  {
    title: "Experienced Team",
    icon: Settings,
    desc: "Years of professional moving experience across Kenya. We handle every move with skill and precision.",
  },
  {
    title: "Care & Protection",
    icon: Shield,
    desc: "Your belongings are treated like our own. Careful packing, secure transport, and insurance for peace of mind.",
  },
  {
    title: "Tailored Solutions",
    icon: Heart,
    desc: "No two moves are the same. We create custom plans that fit your timeline, budget, and specific needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden min-h-full flex flex-col items-center justify-center bg-jungle-dark px-4 py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 sm:h-20 lg:h-24">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M0,80 C240,20 480,140 720,80 C960,20 1200,140 1440,80 L1440,0 L0,0 Z"
            className="fill-white"
          />
        </svg>
      </div>
      <div className="max-w-7xl w-full">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Why Choose Shalom
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            We don&apos;t just move your things &mdash; we settle you in.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="text-center px-4">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="mt-3 text-white/50 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
