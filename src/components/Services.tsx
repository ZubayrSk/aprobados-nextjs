"use client";

import { motion } from "framer-motion";

const services = [
  { icon: "📖", title: "Tutorías Académicas", desc: "Clases personalizadas en todas las asignaturas del currículo español, adaptadas al ritmo de cada alumno" },
  { icon: "🎯", title: "Preparación de Exámenes", desc: "Selectividad, Cambridge y pruebas oficiales. Simulacros reales y estrategias para maximizar resultados" },
  { icon: "🌍", title: "Clases de Idiomas", desc: "Inglés, francés y árabe con profesores cualificados. Desde nivel básico hasta certificaciones oficiales" },
  { icon: "📝", title: "Apoyo Escolar Diario", desc: "Ayuda con deberes, resolución de dudas y refuerzo en las materias que más cuestan" },
  { icon: "⏰", title: "Horarios Flexibles", desc: "Mañanas, tardes y fines de semana. Adaptamos los horarios a la vida de tu familia" },
  { icon: "👥", title: "Grupos Reducidos", desc: "Máximo 8 alumnos por grupo para garantizar atención individualizada y mejor aprendizaje" },
];

export const Services = () => {
  return (
    <section id="services" className="px-7 py-24">
      <div className="mx-auto max-w-[1000px]">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[3px] text-gold-dark">
          Nuestros Servicios
        </span>
        <h2 className="mb-3 font-serif text-4xl text-navy-dark">
          Todo lo que tu hijo necesita
        </h2>
        <p className="mb-12 max-w-[500px] text-base leading-relaxed text-text-light">
          No solo damos clases — acompañamos el aprendizaje de principio a fin
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((srv, i) => (
            <motion.div
              key={srv.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-warm-border bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-gold-dark hover:shadow-lg hover:shadow-black/[0.03]"
            >
              <span className="mb-3.5 block text-[28px]">{srv.icon}</span>
              <h3 className="mb-1.5 text-base font-semibold">{srv.title}</h3>
              <p className="text-[13px] leading-relaxed text-text-light">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
