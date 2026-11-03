import { ArrowUpRight, Code2, Globe2, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

const contacts = [
  { icon: Phone, label: "Telefone / WhatsApp", value: "+244 948 862 259", href: "tel:+244948862259" },
  { icon: Mail, label: "Email", value: "vanilsondacosta61@gmail.com", href: "mailto:vanilsondacosta61@gmail.com" },
  { icon: Globe2, label: "LinkedIn", value: "Vanilson da Costa", href: "https://www.linkedin.com/in/vanilson-da-costa" },
  { icon: Code2, label: "GitHub", value: "vanilsondacosta", href: "https://github.com/vanilsondacosta" },
];

const availability = [
  "Oportunidades profissionais",
  "Projetos freelance",
  "Colaborações em projetos tecnológicos",
  "Networking e partilha de conhecimento",
];

export function Contact() {
  return (
    <Reveal>
      <section id="contato" className="contact-panel mt-[300px] overflow-hidden rounded-[18px] text-white max-md:mt-[150px]">
        <div className="contact-grid relative z-10 grid grid-cols-[1.05fr_0.95fr] gap-12 p-[55px] max-lg:p-[40px] max-md:grid-cols-1 max-md:gap-10 max-md:p-[30px_20px]">
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-[#58f0a7]">Contacto / Disponibilidade</p>
              <h1 className="max-w-[700px] text-[clamp(42px,5vw,68px)] font-bold leading-[0.95] tracking-[-0.045em]">
                Vamos construir algo juntos?
              </h1>
              <p className="mt-7 max-w-[650px] text-[16px] leading-[1.75] text-[#bac7c3] max-md:text-[15px]">
                Estou disponível para oportunidades profissionais, projetos freelance, colaborações tecnológicas e novos desafios na área de Engenharia de Software.
              </p>
            </div>

            <a className="contact-button mt-10" href="mailto:vanilsondacosta61@gmail.com">
              <span>Enviar mensagem</span>
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-info">
            <div>
              <p className="contact-column-title">Contactos</p>
              <div className="mt-4 flex flex-col">
                {contacts.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <a key={contact.label} className="contact-item group" href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      <span className="contact-icon"><Icon size={17} /></span>
                      <span className="min-w-0">
                        <span className="block text-[10px] uppercase tracking-[0.14em] text-[#73847f]">{contact.label}</span>
                        <span className="mt-1 block break-all text-[14px] text-[#eaf2ef]">{contact.value}</span>
                      </span>
                      <ArrowUpRight className="ml-auto shrink-0 text-[#58f0a7] opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" size={15} />
                    </a>
                  );
                })}
                <div className="contact-item">
                  <span className="contact-icon"><MapPin size={17} /></span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.14em] text-[#73847f]">Localização</span>
                    <span className="mt-1 block text-[14px] text-[#eaf2ef]">Angola</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-7">
              <p className="contact-column-title">Disponibilidade</p>
              <ul className="mt-4 grid grid-cols-1 gap-3">
                {availability.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[13px] text-[#b9c6c1]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#58f0a7] shadow-[0_0_10px_rgba(88,240,167,0.7)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
