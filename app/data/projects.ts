export type Project = {
  image: string;
  tags: string[];
  title: string;
  repository?: string;
  description: string;
  role: string;
  year: string;
  index: string;
};

export const projects: Project[] = [
  {
    image: "vdm.png",
    tags: ["React", "ReactNative", "Firebase", "Node.js", "Sql"],
    title: "VDM - Monitoramento em tempo real",
    description: "Sistema completo para monitoramento operacional em tempo real, com acompanhamento de dados, integração com serviços cloud e experiência visual pensada para decisões rápidas.",
    role: "Full Stack & Mobile",
    year: "2025",
    index: "01",
  },
  {
    image: "fizio.png",
    tags: ["Html", "Css", "JavaScript"],
    title: "Fizio-Lazer - Ajuda comunitaria",
    description: "Plataforma comunitária construída para aproximar pessoas, organizar pedidos de ajuda e apresentar soluções de forma clara, acessível e responsiva.",
    role: "Frontend Developer",
    year: "2025",
    index: "02",
  },
  {
    image: "evand.png",
    tags: ["Html", "Css", "JavaScript"],
    title: "Evandross Pizzaria - Restaurante",
    description: "Presença digital sofisticada para uma pizzaria, com catálogo visual, identidade marcante e uma navegação simples que valoriza produtos e conversões.",
    role: "Design & Frontend",
    year: "2024",
    index: "03",
  },
  {
    image: "nasa.png",
    tags: ["React", "Node.js"],
    title: "AstroBytes - meteo-map-dashboard",
    description: "Dashboard meteorológico com visualização geográfica, consumo de dados em tempo real e uma interface preparada para transformar informações complexas em leitura rápida.",
    role: "Frontend & APIs",
    year: "2024",
    index: "04",
  },
];
