"use client";

import { useEffect, useState } from "react";

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="page-loader" role="status" aria-label="A carregar portfólio">
          <div className="page-loader-logo">
            <img src="/imagens/logoVv.png" alt="Vanilson da Costa" />
            <span />
          </div>
        </div>
      )}
      {children}
    </>
  );
}
