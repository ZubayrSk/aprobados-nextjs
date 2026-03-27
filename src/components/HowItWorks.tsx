"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Escríbenos por WhatsApp",
    desc: "Cuéntanos qué necesita tu hijo, en qué curso está y qué asignaturas le cuestan más. Sin compromiso.",
  },
  {
    num: "02",
    title: "Evaluamos dónde está tu hijo",
    desc: "Analizamos su nivel, sus dificultades y su forma de aprender. No hay dos alumnos iguales, y no usamos un método único para todos.",
  },
  {
    num: "03",
    title: "Creamos un plan personalizado",
    desc: "Grupos reducidos (máximo 8 alumnos), profesores especializados en el currículo español, horarios que se adaptan a tu familia.",
  },
  {
    num: "04",
    title: "Acompañamos hasta el resultado",
    desc: "No solo damos clases — hacemos seguimiento continuo. Comunicación constante con las familias sobre el progreso y las áreas de mejora.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-navy-dark px-7 py-24">
      <div className="pointer-events-none absolute -top-px left-0 right-0 h-16 bg-gradient-to-b from-white to-navy-dark" />

      <div className="relative mx-auto max-w-[1000px]">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[3px] text-gold-dark">
          Cómo Trabajamos
        </span>
        <h2 className="mb-3 font-serif text-4xl text-white">
          Un camino claro hacia el aprobado
        </h2>
        <p className="mb-12 max-w-[500px] text-base text-white/50">
          Nuestro método en cuatro pasos
        </p>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`grid grid-cols-[60px_1fr] gap-6 py-9 ${
                i < steps.length - 1 ? "border-b border-white/[0.06]" : ""
              }`}
            >
              <span className="font-serif text-[32px] text-gold-dark">{step.num}</span>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
