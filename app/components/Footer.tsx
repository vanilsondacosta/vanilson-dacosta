import { ArrowUpRight, Code2, Globe2, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-[200px] border-t border-white/[0.06] bg-[#071312] text-white max-md:mt-[100px] max-[480px]:mt-20">
      <div className="site-container py-12 max-md:py-10">
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-10 max-md:grid-cols-1 max-md:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <img className="w-11 rounded-full border border-white/[0.08]" src="/imagens/logoVv.png" alt="Logo Vanilson da Costa" />
              <div>
                <p className="font-bold">Vanilson da Costa</p>
                <p className="mt-1 text-[12px] text-[#7f918b]">Engenheiro de Software</p>
              </div>
            </div>
            <p className="mt-5 max-w-[280px] text-[13px] leading-[1.7] text-[#94a39e]">
              Construindo sistemas robustos, experiências modernas e soluções orientadas ao impacto.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#58f0a7]">Navegação</p>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] text-[#b6c2be]">
              <a className="hover:text-[#58f0a7]" href="#inicio">Início</a>
              <a className="hover:text-[#58f0a7]" href="#habilidades">Habilidades</a>
              <a className="hover:text-[#58f0a7]" href="#projetos">Projectos</a>
              <a className="hover:text-[#58f0a7]" href="#contato">Contacto</a>
            </nav>
          </div>

          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#58f0a7]">Contactos</p>
            <div className="flex flex-col gap-3 text-[13px] text-[#b6c2be]">
              <a className="flex items-center gap-2 hover:text-[#58f0a7]" href="tel:+244948862259"><Phone size={14} /> +244 948 862 259</a>
              <a className="flex items-center gap-2 break-all hover:text-[#58f0a7]" href="mailto:vanilsondacosta61@gmail.com"><Mail size={14} /> vanilsondacosta61@gmail.com</a>
              <a className="flex items-center gap-2 hover:text-[#58f0a7]" href="https://www.linkedin.com/in/vanilson-da-costa" target="_blank" rel="noreferrer"><Globe2 size={14} /> Vanilson da Costa <ArrowUpRight size={12} /></a>
              <a className="flex items-center gap-2 hover:text-[#58f0a7]" href="https://github.com/vanilsondacosta" target="_blank" rel="noreferrer"><Code2 size={14} /> vanilsondacosta <ArrowUpRight size={12} /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/[0.07] pt-6 text-[11px] text-[#71817c] max-md:flex-col max-md:items-start max-md:gap-3">
          <span>© 2026 Vanilson da Costa. Todos os direitos reservados.</span>
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#58f0a7]" /> Disponível para novas oportunidades</span>
        </div>
      </div>
    </footer>
  );
}
