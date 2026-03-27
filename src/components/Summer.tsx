"use client";

import { motion } from "framer-motion";
import { MessageCircle, Palette, BookOpen, Gamepad2, Languages } from "lucide-react";
import { WHATSAPP_NUMBERS } from "@/lib/constants";

const activities = [
  { icon: Palette, title: "Talleres Creativos", desc: "Arte, manualidades y expresión" },
  { icon: BookOpen, title: "Refuerzo Académico", desc: "Repasar lo importante del curso" },
  { icon: Gamepad2, title: "Juegos Educativos", desc: "Aprender jugando en grupo" },
  { icon: Languages, title: "Idiomas de Verano", desc: "Práctica de inglés y francés" },
];

export const Summer = () => {
  return (
    <section id="summer" className="bg-gradient-to-br from-gold-light to-warm-bg px-7 py-24">
      <div className="mx-auto grid max-w-[1000px] items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[3px] text-gold-dark">
            Verano
          </span>
          <h2 className="mb-3.5 font-serif text-[34px] text-navy-dark">El verano también cuenta</h2>
          <p className="mb-3 text-[15px] leading-relaxed text-text-body">
            Campamentos y talleres grupales para niños durante los meses de verano. Aprendizaje lúdico, actividades creativas y refuerzo académico en un ambiente divertido.
          </p>
          <p className="mb-5 text-[15px] leading-relaxed text-text-body">
            Ideal para mantener el ritmo de estudio y que la vuelta al cole sea más fácil.
          </p>
          <a
            href={WHATSAPP_NUMBERS[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-dark"
          >
            <MessageCircle className="h-4 w-4" />
            Pregunta por el verano
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {activities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-warm-border bg-white p-5 text-center"
            >
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-gold-light to-gold">
                <a.icon className="h-6 w-6 text-navy-dark" />
              </div>
              <h4 className="mb-1 text-sm font-semibold">{a.title}</h4>
              <p className="text-xs text-text-light">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
