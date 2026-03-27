"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBERS } from "@/lib/constants";

const navItems = [
  { label: "Niveles", to: "levels" },
  { label: "Servicios", to: "services" },
  { label: "Por Qué Nosotros", to: "why" },
  { label: "Verano", to: "summer" },
  { label: "Contacto", to: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-warm-bg/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-7 h-16">
          <Link to="hero" spy smooth offset={-80} className="cursor-pointer">
            <span className="font-serif text-[22px] text-navy-dark">
              Aprobados<span className="text-gold-dark">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy
                smooth
                offset={-80}
                className="cursor-pointer text-[13px] font-medium text-text-light transition-colors hover:text-navy-dark"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_NUMBERS[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 rounded-full bg-navy-dark px-5 py-2.5 text-[13px] font-semibold text-gold transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Hablemos
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex md:hidden items-center justify-center h-10 w-10 text-navy-dark"
              aria-label="Menú"
            >
              {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-warm-bg pt-20 px-7 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy
                smooth
                offset={-80}
                onClick={() => setIsMobileOpen(false)}
                className="cursor-pointer block rounded-lg px-4 py-3 text-lg font-medium text-navy-dark hover:bg-warm-subtle"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_NUMBERS[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-navy-dark px-6 py-3 text-base font-semibold text-gold"
            >
              <MessageCircle className="h-5 w-5" />
              Hablemos por WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
};
