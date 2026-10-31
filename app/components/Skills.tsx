import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <Reveal>
      <section id="habilidades" className="mt-[200px] flex min-h-[900px] w-full flex-col justify-between rounded-[10px] bg-[#071312ec] p-[40px_20px] max-md:mt-[120px] max-md:min-h-0 max-md:gap-5">
        <SectionHeading />
        <div className="max-w-[720px]">
          <h3 className="italic text-[#0a0a0a]">Habilidades</h3>
          <h2 className="mb-4 text-[38px] font-bold">WHAT I CAN BUILD ?</h2>
          <p className="mb-4 leading-[1.8]">Desenvolvedor de sistemas focado em Java, APIs e soluções de software, com paixão e experiência prática na criação de interfaces gráficas para web e mobile.</p>
          <p className="leading-[1.8]">Gosto de transformar problemas reais em experiências digitais simples, funcionais e eficientes.</p>
        </div>
        <div className="h-[35%] w-[45%] rounded-[5px] bg-white shadow-[0_4px_12px_rgba(88,240,167,0.3)] max-md:h-[220px] max-md:w-full" />
      </section>
    </Reveal>
  );
}
