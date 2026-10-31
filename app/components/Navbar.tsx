export function Navbar() {
  return (
    <header className="relative z-50 flex h-[60px] w-full items-center justify-between border-b border-black/[0.05] bg-white/75 px-[30px] backdrop-blur-xl max-md:h-auto max-md:min-h-20 max-md:px-4 max-[480px]:px-3">
      <section className="flex items-center">
        <img className="w-10 max-md:w-[35px]" src="/imagens/logoVv.png" alt="Logo VV" />
      </section>

      <nav className="flex w-[500px] justify-between max-md:w-auto max-md:gap-4 max-[480px]:hidden">
        <a className="text-[13px] font-medium text-[#0a0a0a] transition-colors hover:text-[#58f0a7]" href="#inicio">Início</a>
        <a className="text-[13px] font-medium text-[#0a0a0a] transition-colors hover:text-[#58f0a7]" href="#habilidades">Habilidades</a>
        <a className="text-[13px] font-medium text-[#0a0a0a] transition-colors hover:text-[#58f0a7]" href="#projetos">Projetos</a>
        <a className="text-[13px] font-medium text-[#0a0a0a] transition-colors hover:text-[#58f0a7]" href="#contato">Contato</a>
      </nav>

      <section className="flex w-[250px] items-center justify-between max-md:w-auto max-md:gap-2">
        <a className="flex h-[35px] w-[120px] items-center justify-center rounded-[10px] border border-black/[0.06] text-[13px] text-[#0a0a0a] transition-transform hover:-translate-y-0.5 max-[480px]:w-auto max-[480px]:min-w-[80px] max-[480px]:px-2" href="#projetos">Ver Trabalhos</a>
        <a className="flex h-[35px] w-[120px] items-center justify-center rounded-[10px] border-none bg-gradient-to-r from-black/65 to-[#58f0a7] text-[13px] text-white transition-transform hover:-translate-y-0.5 max-[480px]:w-auto max-[480px]:min-w-[80px] max-[480px]:px-2" href="#contato">Baixar Cv</a>
      </section>
    </header>
  );
}
