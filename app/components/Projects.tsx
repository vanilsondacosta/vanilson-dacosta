import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <Reveal>
      <section id="projetos" className="projects-section mt-[150px] w-full text-[#0a0a0a] max-md:mt-[120px]">
        <header className="projects-header mb-16 flex items-end justify-between border-b border-black/[0.08] pb-7 max-md:mb-10 max-md:flex-col max-md:items-start max-md:gap-5">
          <div>
            <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.22em] text-[#34b88a]">Seleção / 2024—2026</p>
            <h1 className="text-[clamp(42px,6vw,82px)] font-bold leading-[0.92] tracking-[-0.05em]">PROJECTOS</h1>
          </div>
          <p className="max-w-[380px] text-[15px] leading-[1.7] text-[#777] max-md:text-[14px]">
            Sistemas, plataformas e experiências digitais desenvolvidas para resolver problemas reais.
          </p>
        </header>

        <div className="flex flex-col gap-[70px] max-md:gap-[45px]">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}
