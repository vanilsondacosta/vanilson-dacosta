export type Project = {
  image: string;
  tags: string[];
  title: string;
  repository?: string;
};

export const projects: Project[] = [
  {
    image: "vdm.png",
    tags: ["React", "ReactNative", "Firebase", "Node.js", "Sql"],
    title: "VDM - Monitoramento em tempo real",
  },
  {
    image: "fizio.png",
    tags: ["Html", "Css", "JavaScript"],
    title: "Fizio-Lazer - Ajuda comunitaria",
  },
  {
    image: "evand.png",
    tags: ["Html", "Css", "JavaScript"],
    title: "Evandross Pizzaria - Restaurante",
  },
  {
    image: "nasa.png",
    tags: ["React", "Node.js"],
    title: "AstroBytes - meteo-map-dashboard",
  },
];
