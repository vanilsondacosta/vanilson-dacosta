import { Reveal } from "./Reveal";

const stats = [
  { label: "Eu sou", number: "01", title: <>Dev. <br /> Pleno</>, text: <>Junior sim, mas com sede <br /> de aprender e entregar.</>, direction: "direcX" },
  { label: "Domínios", number: "02", title: <>Java <br /> Developer</>, text: <>soluções robustas <br /> e sistemas críticos.</>, direction: "direcY" },
  { label: "Domínios", number: "03", title: <>Mobile <br /> Developer</>, text: <>Apps que funcionam,<br /> código que aprendo.</>, direction: "direcX" },
];

export function Hero() {
  return (
    <Reveal className="w-full">
      <section id="inicio" className="flex w-full justify-between max-md:flex-col max-md:gap-12">
        <div className="flex h-[664px] w-[40%] flex-col items-start justify-between max-md:h-auto max-md:min-h-[600px] max-md:w-full max-[480px]:min-h-[550px]">
          <div className="flex w-full flex-col leading-none text-[#0a0a0a]">
            <h1 className="text-[60px] max-md:text-[clamp(40px,11vw,60px)] max-[480px]:text-[42px]">Quem eu sou ?</h1>
            <br /><br />
            <h1 className="bg-gradient-to-r from-black/65 to-[#58f0a7] bg-clip-text text-[60px] text-transparent max-md:text-[clamp(40px,11vw,60px)] max-[480px]:text-[42px]">Software Dev:</h1>
            <h1 className="text-[60px] max-md:text-[clamp(40px,11vw,60px)] max-[480px]:text-[42px]">Vanilson da</h1>
            <h1 className="text-[60px] max-md:text-[clamp(40px,11vw,60px)] max-[480px]:text-[42px]">Costa.</h1>
          </div>

          <div className="flex flex-col gap-1.5 border-l border-[#58f0a7] p-[15px] text-[14px] text-[#0a0a0a]">
            <p>Sou Vanilson da Costa, nascido em 2005, estagiário no Instituto de Telecomunicações (ITEL).</p>
            <p>Construo interfaces gráficas completas para aplicações web e mobile, com foco no desenvolvimento de software, integração de sistemas e criação de soluções tecnológicas funcionais e eficientes.</p>
   <p>Participei no Coding Angola 2025 e, em 2026, integrei a equipa responsável pela infraestrutura de redes da FITITEL, uma das maiores feiras de tecnologia de Angola. Experiências que fortaleceram as minhas competências técnicas, capacidade de resolução de problemas e trabalho em equipa.</p>
          </div>
        </div>

        <div className="flex w-[18%] flex-col justify-start gap-5 max-md:w-full">
          {stats.map((stat) => (
            <article key={stat.number} className={`stat-card ${stat.direction} flex h-[200px] flex-col justify-between rounded-[10px] border border-black/[0.06] bg-white/30 p-[15px] text-[#0a0a0a] backdrop-blur-xl max-md:h-[170px]`}>
              <div className="flex justify-between text-[#8b8a8a]"><p>{stat.label}</p><p>{stat.number}</p></div>
              <h2 className="text-2xl font-bold">{stat.title}</h2>
              <p className="text-[#8b8a8a]">{stat.text}</p>
            </article>
          ))}
        </div>

        <div className="flex w-[42%] items-end justify-end max-md:w-full max-md:justify-center">
          <img className="portrait max-h-full max-w-full object-contain" src="/imagens/Vanil.png" alt="Vanilson da Costa" />
        </div>
      </section>
    </Reveal>
  );
}
