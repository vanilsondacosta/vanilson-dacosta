import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <Reveal>
      <section id="projetos" className="mt-[150px] flex min-h-[1200px] w-full flex-col items-center justify-between rounded-[10px] border border-[#4d4d4d]/30 p-[40px_20px] text-[#0a0a0a] shadow-[0_4px_12px_rgba(88,240,167,0.3)] max-md:mt-[120px] max-md:min-h-0 max-md:gap-10">
        <SectionHeading />
        <div className="mt-10 grid w-full grid-cols-3 justify-between gap-[30px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-[15px]">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}
