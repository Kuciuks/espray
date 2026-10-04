import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-4 px-6 py-8 md:flex-row md:items-center">
        <span className="text-[15px] font-semibold uppercase tracking-[0.3em]">Espray</span>
        <p className="font-mono text-[11px] text-muted">
          © 2026 · Nestandartiniai baldai · Panevėžys
        </p>
        <div className="flex gap-6 text-[13px] text-muted">
          <Link to="/paslaugos" className="transition-colors hover:text-ink">
            Paslaugos
          </Link>
          <Link to="/galerija" className="transition-colors hover:text-ink">
            Galerija
          </Link>
          <a href="tel:+37060791028" className="transition-colors hover:text-ink">
            +370 607 91028
          </a>
        </div>
      </div>
    </footer>
  );
}
