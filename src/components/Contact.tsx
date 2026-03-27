"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT, WHATSAPP_NUMBERS } from "@/lib/constants";
import dynamic from "next/dynamic";

const contactItems = [
  { icon: Phone, label: "Teléfono 1", value: WHATSAPP_NUMBERS[0].display },
  { icon: Phone, label: "Teléfono 2", value: WHATSAPP_NUMBERS[1].display },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: "Dirección", value: CONTACT.address },
];

const ContactMap = dynamic(() => import("@/components/ContactMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[340px] items-center justify-center rounded-2xl border border-warm-border bg-warm-subtle text-text-muted text-sm">
      Cargando mapa...
    </div>
  ),
});

export const Contact = () => {
  return (
    <section id="contact" className="bg-white px-7 py-24">
      <div className="mx-auto max-w-[1000px]">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[3px] text-gold-dark">
          Encuéntranos
        </span>
        <h2 className="mb-3 font-serif text-4xl text-navy-dark">Ven a conocernos</h2>
        <p className="mb-12 max-w-[500px] text-base leading-relaxed text-text-light">
          Estamos en el centro de Tánger, fácil de llegar
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 md:grid-cols-2"
        >
          <ContactMap />

          <div className="flex flex-col justify-center gap-5">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3.5">
                <div className="flex h-[42px] w-[42px] min-w-[42px] items-center justify-center rounded-lg bg-warm-subtle">
                  <item.icon className="h-[18px] w-[18px] text-navy-dark" />
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold text-navy-dark">{item.label}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-text-light hover:text-navy-dark">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-text-light">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
