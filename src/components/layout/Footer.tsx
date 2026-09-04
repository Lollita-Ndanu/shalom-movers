"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink, Send } from "lucide-react";
import { SOCIAL_LINKS, BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";

const SERVICES = [
  "Home Relocation",
  "Office Moves",
  "Goods Transport",
  "CCTV Installation",
  "Water Filters",
  "Cleaning",
] as const;

const PARTNERS = [
  { label: "ML", color: "bg-blue-500" },
  { label: "TK", color: "bg-emerald-500" },
  { label: "AX", color: "bg-purple-500" },
  { label: "VZ", color: "bg-amber-500" },
  { label: "NP", color: "bg-rose-500" },
];

export default function Footer() {
  return (
    <footer className="min-h-full flex flex-col bg-gradient-to-b from-jungle-dark to-[#003A22] text-white">
      <div className="flex-1 flex flex-col justify-between max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Subscribe */}
        <div className="text-center">
          <h3 className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Stay Updated
          </h3>
          <p className="text-white/60 text-sm mb-5">
            Subscribe to Shalom for moving tips and exclusive offers.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gold hover:bg-gold-light text-jungle-dark text-sm font-semibold transition-all duration-300 whitespace-nowrap w-full sm:w-auto"
            >
              Subscribe
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Partners */}
        <div className="text-center">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">
            Our Partners
          </span>
          <div className="flex items-center justify-center gap-5 sm:gap-6 mt-4 flex-wrap">
            {PARTNERS.map((partner, i) => (
              <div
                key={partner.label}
                className={`w-12 h-12 sm:w-14 sm:h-14 ${partner.color} rounded-xl flex items-center justify-center text-white/90 text-sm font-bold tracking-wide animate-float`}
                style={{
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: `${3.5 + i * 0.4}s`,
                }}
              >
                {partner.label}
              </div>
            ))}
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-8 text-center sm:text-left">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo1.png"
                alt="Shalom Movers"
                width={88}
                height={88}
                className="w-[5.5rem] h-[5.5rem] object-contain mx-auto sm:mx-0"
              />
            </Link>
            <p className="text-white/70 text-sm italic">
              &ldquo;We settle you in.&rdquo;
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Professional home &amp; office relocation services in Kenya.
              Making every move a peaceful experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase">
              Contact
            </h4>
            <ul className="space-y-2.5 inline-flex flex-col items-center sm:items-start mx-auto sm:mx-0">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phone1}`}
                  className="flex items-center gap-2.5 text-white/70 hover:text-gold text-sm transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{BUSINESS_INFO.phone1}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phone2}`}
                  className="flex items-center gap-2.5 text-white/70 hover:text-gold text-sm transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{BUSINESS_INFO.phone2}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-2.5 text-white/70 hover:text-gold text-sm transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{BUSINESS_INFO.address}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* CTA + Social */}
          <div className="space-y-5">
            <div className="space-y-3">
              <h4 className="text-gold text-xs font-semibold tracking-widest uppercase">
                Ready to move?
              </h4>
              <Link
                href="/quote"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gold hover:bg-gold-light text-jungle-dark text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-gold/20"
              >
                Get a Quote
              </Link>
            </div>

            <div className="space-y-3">
              <span className="block text-gold text-xs font-semibold tracking-widest uppercase">
                Follow Us
              </span>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-gold/20 transition-all duration-300 hover:scale-110"
                    aria-label={social.platform}
                  >
                    <Image
                      src={social.icon}
                      alt={social.platform}
                      width={18}
                      height={18}
                      className="w-[18px] h-[18px] brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-4 bg-[#003A22] flex-shrink-0">
        <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights
            reserved.
          </p>
          <a
            href="https://www.linkedin.com/in/lollita-ndanu-a67462328/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/40 hover:text-gold text-sm transition-colors duration-200"
          >
            <span>&#10023;</span>
            <span>Designed by Lollita</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
