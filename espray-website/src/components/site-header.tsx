import { useState } from "react";
import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/paslaugos", label: "Paslaugos" },
  { to: "/galerija", label: "Galerija" },
  { to: "/apie", label: "Apie mus" },
  { to: "/kontaktai", label: "Kontaktai" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Link to="/" className="flex items-baseline gap-3">
          <span className="text-[19px] font-semibold uppercase tracking-[0.34em]">Espray</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:inline">
            Panevėžys · LT
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] text-muted md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-ink" }}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/kontaktai"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-[13px] font-medium text-white transition-all duration-300 hover:gap-3 hover:bg-accent-deep"
          >
            Užklausa <span aria-hidden="true">→</span>
          </Link>
          <button
            type="button"
            aria-label="Meniu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full border border-line text-ink md:hidden"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line/70 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-[14px] text-muted">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-ink" }}
                className="transition-colors hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
