import type { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071312ec] text-[#d1d5db] shadow-[0_4px_12px_rgba(88,240,167,0.3)]">
      <div className="h-[180px] overflow-hidden border-b border-white/[0.05] bg-[repeating-conic-gradient(#ccc_0%_25%,#eee_0%_50%)] bg-[length:20px_20px]">
        <img className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]" src={`/imagens/${project.image}`} alt={project.title} />
      </div>
      <div className="p-5 max-md:p-[18px]">
        <div className="mb-[15px] flex flex-wrap gap-[10px]">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[#0d1f1c] px-3 py-1.5 text-xs text-[#9ca3af]">{tag}</span>
          ))}
        </div>
        <h2 className="mb-[10px] text-[22px] text-[#e5e7eb] max-md:text-[20px]">{project.title}</h2>
        <p className="mb-[15px] text-sm leading-[1.5] text-[#9ca3af]">Experiência digital com estética elevada e foco direto em conversão, clareza do catálogo e percepção de valor.</p>
        <a className="text-sm font-bold text-[#34d399] hover:underline" href={project.repository ?? "#"}>Ver repositório ↗</a>
      </div>
    </article>
  );
}
