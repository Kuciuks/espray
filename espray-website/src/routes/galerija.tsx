import { createFileRoute, Link } from "@tanstack/react-router";

import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryWardrobe from "@/assets/gallery-wardrobe.jpg";
import galleryDetail from "@/assets/gallery-detail.jpg";

export const Route = createFileRoute("/galerija")({
  head: () => ({
    meta: [
      { title: "Galerija — ESPRAY · Atlikti darbai ir projektai" },
      {
        name: "description",
        content:
          "Pažvelkite, ką kuriame: nestandartinės virtuvės, drabužinės, biuro baldai ir frezuoti dekoratyviniai elementai.",
      },
      { property: "og:title", content: "Galerija — ESPRAY · Atlikti darbai ir projektai" },
      {
        property: "og:description",
        content: "Pažvelkite, ką kuriame: virtuvės, drabužinės, biuro baldai ir dekoratyviniai frezavimai.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GalerijaPage,
});

const works = [
  {
    image: galleryKitchen,
    alt: "Minimali virtuvė su matinio dažyto MDF spintelėmis",
    title: "Virtuvės fasadai",
    note: "MDF dažymas · matinė danga",
    span: "md:col-span-7",
    ratio: "aspect-[16/9]",
  },
  {
    image: galleryWardrobe,
    alt: "Drabužinė su plonomis riešutmedžio lentynomis",
    title: "Drabužinė",
    note: "Nestandartiniai matmenys · apšvietimas",
    span: "md:col-span-5",
    ratio: "aspect-[4/5] md:aspect-[4/5]",
  },
  {
    image: galleryDetail,
    alt: "Be siūlių matinio lako stalčiaus priekio briauna",
    title: "Briaunų apdaila",
    note: "Rankinis patikrinimas prieš montavimą",
    span: "md:col-span-5",
    ratio: "aspect-[4/5] md:aspect-[4/5]",
  },
  {
    image: galleryKitchen,
    alt: "Biuro baldai su integruotais darbo paviršiais",
    title: "Biuro baldai",
    note: "Projektavimas · gamyba · montavimas",
    span: "md:col-span-7",
    ratio: "aspect-[16/9]",
  },
] as const;

function GalerijaPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pt-12 pb-24">
      <header className="max-w-[42ch]">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
          Galerija · atlikti darbai
        </p>
        <h1 className="mt-5 text-[38px] font-semibold leading-[1.05] tracking-tight text-balance md:text-[52px]">
          Pažvelkite, ką kuriame!
        </h1>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-muted">
          Dalijamės pagamintų baldų ir laukiančių projektų pavyzdžiais. Galbūt čia pamatysite savo
          svajonių baldo dizainą.
        </p>
      </header>

      <section className="mt-10 grid grid-cols-12 gap-3">
        {works.map((work) => (
          <div
            key={work.title}
            className={`col-span-12 ${work.span} overflow-hidden rounded-[26px] border border-line/70 bg-glass/50 ring-1 ring-black/5`}
          >
            <img
              src={work.image}
              alt={work.alt}
              loading="lazy"
              className={`w-full object-cover ${work.ratio}`}
              width={1200}
              height={800}
            />
            <div className="flex items-start justify-between gap-4 p-5">
              <div>
                <h2 className="text-[16px] font-semibold tracking-tight">{work.title}</h2>
                <p className="mt-1 font-mono text-[11px] text-muted">{work.note}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-3 flex flex-col items-start justify-between gap-6 rounded-[26px] border border-line/70 bg-glass/80 p-8 ring-1 ring-black/5 backdrop-blur-xl md:flex-row md:items-center md:p-10">
        <div>
          <h2 className="text-[24px] font-semibold tracking-tight">Svajojate apie panašų baldą?</h2>
          <p className="mt-2 max-w-[48ch] text-[14px] leading-relaxed text-muted">
            Atsiųskite savo idėją — parengsime pasiūlymą per 1 darbo dieną.
          </p>
        </div>
        <Link
          to="/kontaktai"
          className="shrink-0 rounded-full bg-accent px-6 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:bg-accent-deep"
        >
          Užklausa →
        </Link>
      </section>
    </div>
  );
}
