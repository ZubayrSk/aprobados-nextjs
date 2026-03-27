"use client";

import { motion } from "framer-motion";

export const Struggle = () => {
  return (
    <section className="px-7 py-24">
      <div className="mx-auto grid max-w-[1000px] items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-2xl border border-warm-border bg-white p-8 shadow-lg shadow-black/[0.04]">
            <p className="mb-4 font-serif text-[22px] leading-snug text-navy-dark">
              <span className="mr-1 align-[-12px] text-5xl leading-none text-gold-dark">&ldquo;</span>
              Mi hijo llegaba a casa agotado y aún tenía horas de deberes. No sabía cómo ayudarle.
            </p>
            <span className="text-[13px] text-text-muted">— Madre de alumno de ESO</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="mb-4 font-serif text-4xl leading-tight text-navy-dark">
            El sistema español en Tánger tiene sus retos
          </h2>
          <p className="mb-3 text-base leading-relaxed text-text-body">
            Muchos padres nos cuentan lo mismo: las clases van rápido, el currículo es exigente, y no siempre hay apoyo suficiente.
          </p>
          <p className="mb-3 text-base leading-relaxed text-text-body">
            Desde Primaria hasta Bachillerato, cada etapa trae nuevos desafíos. Y cuando llega la Selectividad, la presión se multiplica.
          </p>
          <p className="font-semibold text-gold-dark">
            Ahí es donde entramos nosotros.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
