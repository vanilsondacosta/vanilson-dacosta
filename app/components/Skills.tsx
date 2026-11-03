import { Code2, Layers3, ServerCog, Smartphone } from "lucide-react";
import type { CSSProperties } from "react";
import { Reveal } from "./Reveal";

const capabilities = [
  { icon: ServerCog, number: "01", title: "Backend", text: "Java · Spring Boot · APIs REST", accent: "Arquiteturas robustas" },
  { icon: Code2, number: "02", title: "Frontend", text: "React · Next.js · Interfaces modernas", accent: "Experiências centradas" },
  { icon: Smartphone, number: "03", title: "Mobile", text: "React Native · Aplicações multiplataforma", accent: "Produtos intuitivos" },
  { icon: Layers3, number: "04", title: "Sistema", text: "Arquitetura · Integração · Segurança", accent: "Visão de ponta a ponta" },
];

export function Skills() {
  return (
    <Reveal>
      <section id="habilidades" className="skills-panel mt-[200px] w-full overflow-hidden rounded-[18px] text-white max-md:mt-[120px]">
        <div className="skills-grid" aria-hidden="true" />
        <div className="relative z-10 p-[55px] max-lg:p-[40px] max-md:p-[25px_20px]">
          <div className="mb-12 flex items-center gap-3 max-md:mb-8">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff3b57] shadow-[0_0_18px_rgba(255,59,87,0.8)]" />
            <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#ff647a]">Perfil profissional / Engenharia</span>
          </div>

          <div className="grid grid-cols-[1.35fr_0.65fr] items-end gap-12 max-lg:grid-cols-[1fr_0.55fr] max-md:grid-cols-1 max-md:gap-8">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#58f0a7]">Quem sou</p>
              <h1 className="max-w-[780px] text-[clamp(42px,5vw,72px)] font-bold leading-[0.95] tracking-[-0.045em]">
                ENGENHEIRO DE SOFTWARE
              </h1>
              <p className="mt-7 max-w-[720px] text-[17px] leading-[1.75] text-[#b8c5c1] max-md:text-[15px]">
                Focado em sistemas robustos, escaláveis e eficientes. Desenvolvo soluções backend com Java e Spring Boot, interfaces modernas com React e Next.js, e aplicações mobile com React Native.
              </p>
            </div>

            <div className="system-orbit mx-auto mb-2 max-md:mt-4 max-md:h-[220px] max-md:w-[220px]" aria-label="Tecnologias integradas">
              <div className="orbit-ring orbit-ring-1" />
              <div className="orbit-ring orbit-ring-2" />
              <div className="orbit-core">
                <Layers3 size={32} strokeWidth={1.5} />
              </div>
              <span className="orbit-node orbit-node-1">JAVA</span>
              <span className="orbit-node orbit-node-2">REACT</span>
              <span className="orbit-node orbit-node-3">API</span>
            </div>
          </div>

          <div className="my-10 h-px bg-gradient-to-r from-[#58f0a7]/50 via-white/10 to-transparent" />

          <div className="grid grid-cols-4 gap-px overflow-hidden rounded-[12px] border border-white/[0.08] bg-white/[0.08] max-lg:grid-cols-2 max-md:grid-cols-1">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="skill-card group min-h-[210px] bg-[#071312]/95 p-6 max-md:min-h-[190px]" style={{ "--skill-delay": `${index * 90}ms` } as CSSProperties}>
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#70817c]">{item.number} / Área</span>
                    <Icon className="text-[#58f0a7] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6" size={24} strokeWidth={1.5} />
                  </div>
                  <div className="mt-10">
                    <p className="mb-1 text-[12px] text-[#58f0a7]">{item.accent}</p>
                    <h2 className="text-[28px] font-bold">{item.title}</h2>
                    <p className="mt-3 text-[14px] leading-[1.65] text-[#9daaa6]">{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 grid grid-cols-[0.65fr_1.35fr] gap-12 max-md:grid-cols-1 max-md:gap-6">
            <div className="flex items-end">
              <p className="text-[13px] uppercase tracking-[0.16em] text-[#70817c]">Por trás de cada solução</p>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-[15px] leading-[1.7] text-[#c2cdca] max-md:grid-cols-1">
              <p>Compreendo requisitos complexos e arquiteturas desde a integração de APIs até à experiência final.</p>
              <p>Valorizo código seguro, organizado, performático e fácil de manter.</p>
              <p>Penso além da interface para entregar sistemas completos e coerentes.</p>
              <p>Aprendo continuamente para construir tecnologia com impacto real.</p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
