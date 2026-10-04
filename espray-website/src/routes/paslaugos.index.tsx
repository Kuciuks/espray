import { createFileRoute, Link } from "@tanstack/react-router";
import { serviceLinks } from "@/lib/services";

export const Route = createFileRoute("/paslaugos/")({
  head: () => ({ meta: [
    { title: "Paslaugos — ESPRAY · Nestandartiniai baldai" },
    { name: "description", content: "Baldų gamyba, dizainerės paslaugos, projektavimas, MDF dažymas, CNC frezavimas, transportavimas ir montavimas Panevėžyje." },
    { property: "og:title", content: "Paslaugos — ESPRAY · Nestandartiniai baldai" },
    { property: "og:description", content: "Visos nestandartinių baldų paslaugos vienoje vietoje — nuo projekto iki montavimo." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PaslaugosPage,
});

function PaslaugosPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-12">
      <header className="max-w-[48ch]">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">Paslaugos · visos vienoje gamykloje</p>
        <h1 className="mt-5 text-[38px] font-semibold leading-[1.05] tracking-tight text-balance md:text-[52px]">Nuo idėjos iki sumontuoto baldo.</h1>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-muted">Projektuojame, gaminame, dažome, frezuojame ir montuojame. Pasirinkite paslaugą ir sužinokite, kaip vyksta konkretus etapas.</p>
      </header>

      <section className="mt-10 grid grid-cols-12 gap-3">
        {serviceLinks.map((service) => (
          <Link key={service.tag} to={service.to} className="group col-span-12 flex min-h-[220px] flex-col justify-between rounded-[26px] border border-line/70 bg-glass/70 p-8 ring-1 ring-black/5 backdrop-blur-xl transition-colors hover:bg-glass/95 md:col-span-6">
            <div><p className="font-mono text-[10px] text-accent">{service.tag}</p><h2 className="mt-4 text-[22px] font-semibold tracking-tight">{service.title}</h2><p className="mt-3 max-w-[42ch] text-[14px] leading-relaxed text-ink/70">{service.text}</p></div>
            <span className="mt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-accent">Plačiau <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span></span>
          </Link>
        ))}
      </section>

      <section className="mt-3 flex flex-col items-start justify-between gap-6 rounded-[26px] border border-line/70 bg-glass/80 p-8 ring-1 ring-black/5 backdrop-blur-xl md:flex-row md:items-center md:p-10">
        <div><h2 className="text-[24px] font-semibold tracking-tight">Nežinote, kur pradėti projektą?</h2><p className="mt-2 max-w-[48ch] text-[14px] leading-relaxed text-muted">Parašykite arba paskambinkite — aptarsime idėją ir pasiūlysime tinkamą kelią.</p></div>
        <Link to="/kontaktai" className="shrink-0 rounded-full bg-accent px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-accent-deep">Susisiekti →</Link>
      </section>
    </div>
  );
}
