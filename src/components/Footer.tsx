"use client";

import { CONTACT, WHATSAPP_NUMBERS } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="bg-navy-dark px-7 pt-12 pb-6">
      <div className="mx-auto grid max-w-[1000px] gap-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <span className="mb-2.5 block font-serif text-xl text-white">
            Aprobados<span className="text-gold-dark">.</span>
          </span>
          <p className="text-[13px] leading-relaxed text-white/50">
            Centro de estudios privado especializado en apoyo académico para el sistema educativo español en Tánger.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[1.5px] text-gold-dark">
            Contacto
          </h4>
          <p className="text-[13px] leading-[2] text-white/50">
            📞 {WHATSAPP_NUMBERS[0].display}
            <br />
            📞 {WHATSAPP_NUMBERS[1].display}
            <br />
            <a href={`mailto:${CONTACT.email}`} className="hover:text-white/70">
              {CONTACT.email}
            </a>
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[1.5px] text-gold-dark">
            Síguenos
          </h4>
          <div className="flex flex-col gap-0">
            <a
              href={CONTACT.facebook}
              className="text-[13px] leading-[2] text-white/50 hover:text-white/70"
            >
              Facebook
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] leading-[2] text-white/50 hover:text-white/70"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-7 max-w-[1000px] border-t border-white/[0.06] pt-5 text-center text-[11px] text-white/30">
        © {new Date().getFullYear()} Aprobados · Centro de Estudios Privado · Tánger
      </div>
    </footer>
  );
};
