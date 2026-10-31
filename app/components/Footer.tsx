export function Footer() {
  return (
    <footer className="mt-[200px] flex h-[100px] items-center justify-between border-t border-white/[0.05] bg-[#071312ec] px-[200px] text-white max-xl:px-[60px] max-md:mt-[100px] max-md:h-auto max-md:min-h-[100px] max-md:flex-wrap max-md:gap-5 max-md:px-5 max-[480px]:mt-20 max-[480px]:px-[15px]">
      <section className="flex items-center gap-2 text-white">
        <img className="w-10 max-md:w-[35px]" src="/imagens/KimbyGrantLogo.png" alt="Logotipo Vanilson" />
        <p>Vanilson da Costa</p>
      </section>
      <span>© 2026 Vanilson. Todos os direitos reservados.</span>
      <div>Vv</div>
    </footer>
  );
}
