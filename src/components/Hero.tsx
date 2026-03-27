"use client";

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { Link } from "react-scroll";
import { WHATSAPP_NUMBERS } from "@/lib/constants";

const trustItems = [
  { value: "+10", label: "Años en Tánger" },
  { value: "+500", label: "Alumnos aprobados" },
  { value: "8 máx", label: "Alumnos por grupo" },
];

export const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-7 pt-32 pb-20">
      <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold-dark to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[680px] text-center"
      >
        <span className="mb-7 inline-block text-xs font-semibold uppercase tracking-[3px] text-gold-dark">
          Centro de Estudios Privado · Tánger
        </span>

        <h1 className="mb-6 font-serif text-[44px] leading-[1.15] text-navy-dark md:text-[52px]">
          Tu hijo merece<br />
          <em className="text-gold-dark">aprobar sin sufrir</em>
        </h1>

        <p className="mx-auto mb-9 max-w-[520px] text-lg leading-relaxed text-text-body">
          Sabemos lo que es ver a tu hijo frustrado con los estudios. Por eso creamos un espacio
          donde aprender no es una carga, sino un camino hacia el éxito.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href={WHATSAPP_NUMBERS[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-navy-dark px-8 py-4 text-[15px] font-semibold text-gold shadow-lg shadow-navy-dark/15 transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-[18px] w-[18px]" />
            Cuéntanos sobre tu hijo
          </a>
          <Link
            to="levels"
            spy
            smooth
            offset={-80}
            className="cursor-pointer inline-flex items-center gap-1.5 text-sm font-medium text-text-light transition-colors hover:text-navy-dark"
          >
            Ver niveles <ChevronDown className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-8 border-t border-warm-border pt-7 sm:flex-row">
          {trustItems.map((item) => (
            <div key={item.label} className="text-center">
              <span className="block font-serif text-2xl text-gold-dark">{item.value}</span>
              <span className="text-xs text-text-muted">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-9 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="h-9 w-px bg-gradient-to-b from-gold-dark to-transparent" />
        <span className="text-[10px] tracking-[2px] text-text-muted">DESCUBRE</span>
      </div>
    </section>
  );
};
