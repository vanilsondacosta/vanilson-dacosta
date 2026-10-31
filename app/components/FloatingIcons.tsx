import { Braces, Code2, Cpu, Database, Layers3, Terminal } from "lucide-react";

const icons = [
  { Icon: Code2, className: "left-[6%] top-[18%] delay-0" },
  { Icon: Braces, className: "left-[88%] top-[26%] delay-2" },
  { Icon: Database, className: "left-[9%] top-[48%] delay-4" },
  { Icon: Layers3, className: "left-[91%] top-[56%] delay-1" },
  { Icon: Terminal, className: "left-[12%] top-[78%] delay-3" },
  { Icon: Cpu, className: "left-[86%] top-[84%] delay-5" },
];

export function FloatingIcons() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {icons.map(({ Icon, className }, index) => (
        <div key={index} className={`floating-icon absolute text-[#58f0a7]/35 ${className}`}>
          <Icon size={34} strokeWidth={1.4} />
        </div>
      ))}
    </div>
  );
}
