import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <Reveal>
      <section id="contato" className="mt-[300px] flex h-[350px] items-center justify-between rounded-[10px] bg-gradient-to-r from-black/65 to-[#58f0a7] p-[55px] text-white backdrop-blur-xl max-md:mt-[150px] max-md:h-auto max-md:min-h-[350px] max-md:flex-col max-md:items-start max-md:justify-center max-md:gap-[30px] max-md:p-[30px_20px]">
        <div>
          <h1 className="mb-5 text-[45px] font-bold max-md:text-[clamp(30px,9vw,45px)] max-[480px]:text-[32px]">Vamos criar algo impactante <br /> juntos ?</h1>
          <p>Disponível para freelances, contratos e colaborações em produtos digitais. Se você procura uma <br className="max-md:hidden" /> interface com presença, sofisticação e execução técnica real, vamos conversar.</p>
        </div>
        <a className="flex h-[50px] w-[250px] items-center justify-center rounded-[10px] bg-white text-[#0a0a0a] transition-transform hover:-translate-y-1 max-md:w-full max-md:max-w-[250px]" href="mailto:hello@example.com">Enviar mensagem</a>
      </section>
    </Reveal>
  );
}
