import { createFileRoute } from "@tanstack/react-router";

import { QuoteForm } from "@/components/quote-form";

export const Route = createFileRoute("/kontaktai")({
  head: () => ({
    meta: [
      { title: "Kontaktai — ESPRAY · Užklausa dėl baldų" },
      {
        name: "description",
        content:
          "Susisiekite su ESPRAY: +370 607 91028, nerijus@espray.lt, Velžio kel. 48, Panevėžys. Užklausos, konsultacijos ir nestandartinių baldų pasiūlymai.",
      },
      { property: "og:title", content: "Kontaktai — ESPRAY · Užklausa dėl baldų" },
      {
        property: "og:description",
        content: "Parašykite, ką norite pagaminti — atsakysime per 1 darbo dieną.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: KontaktaiPage,
});

const contacts = [
  { label: "Užsakymai ir konsultacijos", name: "Nerijus", phone: "+370 607 91028" },
  { label: "Gamyba ir techniniai klausimai", name: "Norbertas", phone: "+370 643 01860" },
  { label: "Dizainerė", name: "Evelina", phone: "+370 630 71541" },
] as const;

function KontaktaiPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pt-12 pb-24">
      <header className="max-w-[42ch]">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
          Kontaktai
        </p>
        <h1 className="mt-5 text-[38px] font-semibold leading-[1.05] tracking-tight text-balance md:text-[52px]">
          Susisiekite su mumis!
        </h1>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-muted">
          Turite klausimų ar norite sužinoti daugiau? Nedvejodami paskambinkite arba palikite
          užklausą — atsakysime per 1 darbo dieną.
        </p>
      </header>

      <section className="mt-10 rounded-[26px] border border-line/70 bg-glass/80 p-8 ring-1 ring-black/5 backdrop-blur-xl md:p-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <h2 className="text-[24px] font-semibold tracking-tight">Kontaktinė informacija</h2>
            <div className="mt-6 space-y-5">
              {contacts.map((contact) => (
                <div key={contact.name} className="border-t border-line pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {contact.label}
                  </p>
                  <p className="mt-1 text-[15px] font-semibold">{contact.name}</p>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="font-mono text-[12px] text-ink/80 transition-colors hover:text-accent"
                  >
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-2 font-mono text-[12px] text-ink/80">
              <p>
                <a href="mailto:nerijus@espray.lt" className="hover:text-accent">
                  nerijus@espray.lt
                </a>
              </p>
              <p className="text-muted">Velžio kel. 48, LT-36148 Panevėžys</p>
              <p className="text-muted">Įmonės kodas 307071953</p>
            </div>
            <div className="mt-6 flex gap-4 text-[13px] text-muted">
              <a
                href="https://www.facebook.com/share/165pxc8BnP/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/_efurniture_baldu_gamyba"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h2 className="text-[24px] font-semibold tracking-tight">Užklausa</h2>
            <p className="mt-2 max-w-[40ch] text-[14px] leading-relaxed text-muted">
              Parašykite, ką norite pagaminti — atsakysime su preliminaria kaina ir terminu.
            </p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-3 overflow-hidden rounded-[26px] border border-line/70 bg-glass/50 ring-1 ring-black/5">
        <iframe
          title="ESPRAY lokacija — Velžio kel. 48, Panevėžys"
          src="https://www.google.com/maps?q=55.732017,24.342611&z=13&output=embed"
          className="h-[360px] w-full"
          loading="lazy"
        />
      </section>
    </div>
  );
}
