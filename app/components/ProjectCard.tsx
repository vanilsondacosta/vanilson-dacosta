"use client";

import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Project } from "../data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.18 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={ref} className={`project-row ${index % 2 === 1 ? "project-row-reverse" : ""} ${visible ? "project-row-visible" : ""}`}>
      <div className="project-visual group">
        <div className="project-browser-bar">
          <div className="flex gap-[6px]">
            <span /><span /><span />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#71817d]">project-{project.index}</span>
        </div>
        <div className="project-image-wrap">
          <img src={`/imagens/${project.image}`} alt={project.title} />
          <div className="project-image-overlay" />
        </div>
      </div>

      <div className="project-details">
        <div className="flex items-center justify-between border-b border-black/[0.07] pb-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#34b88a]">Project {project.index}</span>
          <span className="text-[12px] text-[#999]">{project.year}</span>
        </div>

        <div className="mt-7">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#777]">{project.role}</p>
          <h2 className="text-[clamp(30px,3.5vw,48px)] font-bold leading-[1.05] tracking-[-0.035em]">{project.title}</h2>
          <p className="mt-5 max-w-[560px] text-[15px] leading-[1.75] text-[#686868]">{project.description}</p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        <a className="project-link mt-8" href={project.repository ?? "#"} target={project.repository ? "_blank" : undefined} rel="noreferrer">
          <span>Ver repositório</span>
          <ExternalLink size={17} />
        </a>
      </div>
    </article>
  );
}
