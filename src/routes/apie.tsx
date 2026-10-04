import { createFileRoute, Link } from "@tanstack/react-router";

import heroTouch from "@/assets/hero-touch.jpg";

export const Route = createFileRoute("/apie")({
  head: () => ({
    meta: [
      { title: "Apie mus — ESPRAY · Baldų gamyba Panevėžyje" },
      {
        name: "description",
        content:
          "Aukštos kvalifikacijos meistrų komanda su ilgamete patirtimi baldų gamybos srityje. Kokybė, estetika ir funkcionalumas už konkurencingą kainą.",
      },
      { property: "og:title", content: "Apie mus — ESPRAY · Baldų gamyba Panevėžyje" },
      {
        property: "og:description",
        content: "Meistrų komanda, keičianti nusistovėjusius standartus baldų gamyboje.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ApiePage,
});

const values = [
  {
    title: "Atvira komunikacija",
    text: "Procesą pradedame nuo profesionalios ir atotros komunikacijos, siekdami tiksliai suprasti kliento poreikius.",
  },
  {
    title: "Vizualizacija prieš gamybą",
    text: "Kuriame aukštos kokybės vizualizacijas, kurios leidžia iš anksto įsivaizduoti galutinį rezultatą.",
  },
  {
    title: "Praktiška kūryba",
    text: "Projektuojame praktiškai, bet kūrybiškai — siekiame ne tik funkcionalumo, bet ir išskirtinumo.",
  },
  {
    title: "Kokybė — prioritetas",
    text: "Naudojame pažangias technologijas ir medžiagas, kurios užtikrina ilgaamžiškumą bei estetinį tobulumą.",
  },
] as const;

const team = [
  { name: "Nerijus Novikovas", role: "Direktorius · užsakymai ir konsultacijos", phone: "+370 607 91028" },
  { name: "Norbertas", role: "Gamyba · techniniai klausimai", phone: "+370 643 01860" },
  { name: "Evelina", role: "Dizainerė", phone: "+370 630 71541" },
] as const;

function ApiePage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pt-12 pb-24">
      <section className="grid grid-cols-12 gap-3">
        <div className="col-span-12 flex flex-col justify-center rounded-[26px] border border-line/70 bg-glass/70 p-9 ring-1 ring-black/5 backdrop-blur-xl md:col-span-7 md:p-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
            Apie mus
          </p>
          <h1 className="mt-5 text-[38px] font-semibold leading-[1.05] tracking-tight text-balance md:text-[50px]">
            Meistrų komanda, keičianti standartus.
          </h1>
          <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-pretty text-ink/75">
            Esame aukštos kvalifikacijos meistrų komanda, turinti ilgametę patirtį baldų gamybos
            srityje ir aiškią viziją — keisti nusistovėjusius standartus pramonėje. Mūsų tikslas —
            ne tik patenkinti, bet ir pranokti kiekvieno kliento lūkesčius.
          </p>
          <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-pretty text-ink/75">
            Gamyba atliekama preciziškai, o montavimas — nepriekaištingai. Didžiuojamės gebėjimu
            spręsti nestandartinius užsakymus, kuriems reikalingas kūrybiškumas, patirtis ir
            techninis meistriškumas.
          </p>
        </div>
        <div className="col-span-12 overflow-hidden rounded-[26px] border border-line/70 bg-glass/50 ring-1 ring-black/5 md:col-span-5">
          <img
            src={heroTouch}
            alt="Ranka patikrinama matinio lako baldų briauna"
            loading="lazy"
            className="h-full min-h-[360px] w-full object-cover"
            width={976}
            height={672}
          />
        </div>
      </section>

      <section className="mt-3 grid grid-cols-12 gap-3">
        {values.map((value, index) => (
          <div
            key={value.title}
            className="col-span-6 rounded-[22px] border border-line/70 bg-glass/70 p-6 ring-1 ring-black/5 backdrop-blur-xl transition-colors duration-300 hover:bg-glass/95 md:col-span-3"
            style={{
              animation: "rise .7s cubic-bezier(0.32,0.72,0,1) both",
              animationDelay: `${120 + index * 80}ms`,
            }}
          >
            <p className="font-mono text-[10px] text-accent">({String.fromCharCode(97 + index)})</p>
            <h2 className="mt-3 text-[15px] font-medium">{value.title}</h2>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{value.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-3 rounded-[26px] border border-line/70 bg-glass/80 p-8 ring-1 ring-black/5 backdrop-blur-xl md:p-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Komanda</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="border-t border-line pt-4">
              <h2 className="text-[17px] font-semibold tracking-tight">{member.name}</h2>
              <p className="mt-1 text-[13px] text-muted">{member.role}</p>
              <a
                href={`tel:${member.phone.replace(/\s/g, "")}`}
                className="mt-3 inline-block font-mono text-[12px] text-ink/80 transition-colors hover:text-accent"
              >
                {member.phone}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 font-mono text-[11px] text-muted">
          Įmonės kodas 307071953 · Velžio kel. 48, LT-36148 Panevėžys
        </p>
      </section>

      <section className="mt-3 flex flex-col items-start justify-between gap-6 rounded-[26px] border border-line/70 bg-glass/80 p-8 ring-1 ring-black/5 backdrop-blur-xl md:flex-row md:items-center md:p-10">
        <div>
          <h2 className="text-[24px] font-semibold tracking-tight">
            Esame pasiruošę paversti jūsų idėjas realybe.
          </h2>
          <p className="mt-2 max-w-[48ch] text-[14px] leading-relaxed text-muted">
            Aukščiausios kokybės baldai, konkurencinga kaina ir išskirtinis požiūris į kiekvieną
            projektą.
          </p>
        </div>
        <Link
          to="/kontaktai"
          className="shrink-0 rounded-full bg-accent px-6 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:bg-accent-deep"
        >
          Susisiekti →
        </Link>
      </section>
    </div>
  );
}
