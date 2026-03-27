"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBERS } from "@/lib/constants";

export const CtaBand = () => {
  return (
    <section className="px-7 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[800px] rounded-[20px] bg-gradient-to-br from-navy-dark to-navy px-10 py-14 text-center"
      >
        <h2 className="mb-2.5 font-serif text-[30px] text-white">
          ¿Listo para que tu hijo apruebe?
        </h2>
        <p className="mx-auto mb-7 max-w-[420px] text-[15px] text-white/60">
          Escríbenos por WhatsApp y te contamos cómo podemos ayudarle. Sin compromiso.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {WHATSAPP_NUMBERS.map((num) => (
            <a
              key={num.display}
              href={num.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-dark transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-[18px] w-[18px]" />
              WhatsApp — {num.display}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
