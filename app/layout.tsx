import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vanilson-dacosta | Portfólio",
  description: "Portfólio de Vanilson da Costa",
  icons: { icon: "/imagens/KimbyGrantLogo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-AO">
      <body>{children}</body>
    </html>
  );
}
