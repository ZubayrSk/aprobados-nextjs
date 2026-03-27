"use client";

import { motion } from "framer-motion";
import { Home, GraduationCap, UserCheck, BarChart3, Trophy } from "lucide-react";

const differentiators = [
  { icon: Home, title: "Ambiente de Confianza", desc: "Un espacio acogedor donde los alumnos se sienten cómodos para aprender y preguntar sin miedo" },
  { icon: GraduationCap, title: "Expertos en el Currículo Español", desc: "Nuestros profesores conocen a fondo el sistema educativo español y sus requisitos específicos" },
  { icon: UserCheck, title: "Atención Individualizada", desc: "Grupos pequeños para que cada alumno reciba el seguimiento y apoyo que necesita" },
  { icon: BarChart3, title: "Seguimiento Continuo", desc: "Comunicación constante con las familias sobre el progreso y las áreas de mejora" },
  { icon: Trophy, title: "Resultados que Hablan", desc: "Más de 500 alumnos han mejorado sus notas y aprobado con nosotros en la última década" },
];

export const WhyChooseUs = () => {
  return (
    <section id="why" className="bg-white px-7 py-24">
      <div className="mx-auto max-w-[1000px]">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[3px] text-gold-dark">
          ¿Por Qué Aprobados?
        </span>
        <h2 className="mb-3 font-serif text-4xl text-navy-dark">No somos una academia más</h2>
        <p className="mb-12 max-w-[500px] text-base leading-relaxed text-text-light">
          Esto es lo que las familias valoran de nosotros
        </p>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:sticky md:top-24"
          >
            <blockquote className="mb-3 border-l-[3px] border-gold-dark pl-5 font-serif text-[22px] leading-snug text-navy-dark">
              En Aprobados mi hijo encontró un sitio donde no tiene miedo a preguntar. Ha pasado de suspensos a notables.
            </blockquote>
            <p className="mb-6 pl-5 text-[13px] text-text-muted">— Madre de alumno de 2º ESO</p>
            <p className="text-[15px] leading-relaxed text-text-body">
              Llevamos más de una década en Tánger. Conocemos el sistema educativo español, sus exigencias y sus puntos débiles. Sabemos lo que funciona porque lo vemos cada día en nuestras aulas.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3.5">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex gap-4 rounded-xl border border-warm-border bg-warm-bg p-5"
              >
                <div className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-lg bg-gradient-to-br from-gold-light to-gold">
                  <d.icon className="h-5 w-5 text-navy-dark" />
                </div>
                <div>
                  <h4 className="mb-1 text-[15px] font-semibold">{d.title}</h4>
                  <p className="text-[13px] leading-relaxed text-text-light">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
