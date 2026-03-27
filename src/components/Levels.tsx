"use client";

import { motion } from "framer-motion";

const levels = [
  {
    age: "6 – 12 años",
    title: "Primaria",
    description: "Construimos las bases. Apoyo en lectura, escritura, matemáticas y hábitos de estudio desde pequeños.",
    tags: ["Matemáticas", "Lengua", "Ciencias", "Inglés", "Deberes"],
  },
  {
    age: "12 – 16 años",
    title: "ESO",
    description: "El salto a secundaria es exigente. Reforzamos cada asignatura y enseñamos técnicas de estudio efectivas.",
    tags: ["Matemáticas", "Física", "Química", "Historia", "Idiomas"],
  },
  {
    age: "16 – 18 años",
    title: "Bachillerato",
    description: "Preparación completa para Bachillerato y Selectividad. Simulacros, estrategia y seguimiento personalizado.",
    tags: ["Selectividad", "Ciencias", "Humanidades", "Cambridge"],
  },
];

export const Levels = () => {
  return (
    <section id="levels" className="bg-white px-7 py-24">
      <div className="mx-auto max-w-[1000px]">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[3px] text-gold-dark">
          Niveles Educativos
        </span>
        <h2 className="mb-3 font-serif text-4xl text-navy-dark">
          Acompañamos a tu hijo en cada etapa
        </h2>
        <p className="mb-12 max-w-[500px] text-base leading-relaxed text-text-light">
          Desde los 6 hasta los 18 años, cubrimos todo el recorrido del sistema educativo español
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {levels.map((level, i) => (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-warm-border bg-warm-bg p-8"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark to-gold" />
              <span className="mb-2.5 inline-block text-[11px] font-semibold uppercase tracking-wider text-gold-dark">
                {level.age}
              </span>
              <h3 className="mb-2.5 font-serif text-2xl">{level.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-text-light">{level.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {level.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-warm-subtle px-2.5 py-1 text-[11px] font-medium text-text-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
