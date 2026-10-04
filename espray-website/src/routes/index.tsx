import { createFileRoute, Link } from "@tanstack/react-router";

import homeCraftHero from "@/assets/home-craft-hero.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryWardrobe from "@/assets/gallery-wardrobe.jpg";
import galleryDetail from "@/assets/gallery-detail.jpg";
import { QuoteForm } from "@/components/quote-form";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ESPRAY — Nestandartiniai baldai Panevėžyje" },
      { name: "description", content: "Projektuojame ir gaminame nestandartinius baldus Panevėžyje — nuo dizaino bei MDF dažymo iki CNC frezavimo ir montavimo." },
      { property: "og:title", content: "ESPRAY — Nestandartiniai baldai Panevėžyje" },
      { property: "og:description", content: "Individualių baldų projektavimas, gamyba ir montavimas vienoje vietoje." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

import { serviceLinks } from "@/lib/services";


function Index() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pt-12 pb-24">
      {/* Hero */}
      <section className="relative isolate flex min-h-[620px] overflow-hidden rounded-[26px] border border-line/70 ring-1 ring-ink/5 md:min-h-[650px]">
        <img
          src={homeCraftHero}
          alt="Meistras tikrina lygią individualaus baldo briauną"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]"
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 -z-10 bg-ink/45 md:bg-ink/35" />
        <div className="flex w-full flex-col justify-between p-8 text-glass md:p-12">
          <div className="max-w-[650px] pt-10 md:pt-14">
            <h1 className="max-w-[13ch] text-[43px] font-semibold leading-[1.02] text-balance md:text-[64px]">
              <span className="animate-sweep inline-block">Lygus paviršius,</span>{" "}
              <span className="animate-sweep inline-block text-glass/70">tikslios briaunos.</span>
            </h1>
            <p className="mt-7 max-w-[47ch] text-[15px] leading-relaxed text-glass/80 md:text-[16px]">
              Gaminame baldus, kuriuos norisi liesti — nuo projekto ir MDF dažymo iki CNC frezavimo bei montavimo vietoje.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link to="/kontaktai" className="rounded-full bg-accent px-5 py-3 text-[14px] font-medium text-glass transition-colors hover:bg-accent-deep">
                Gauti kainos pasiūlymą
              </Link>
              <Link to="/galerija" className="text-[14px] font-medium text-glass transition-colors hover:text-glass/70">
                Žiūrėti darbus ↓
              </Link>
            </div>
          </div>
          <div className="mt-16 flex max-w-[520px] items-start gap-4 border-t border-glass/30 pt-6 md:ml-auto md:mt-10">
            <span className="mt-2 size-2 shrink-0 rounded-full bg-accent" />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-glass/60">Gamyba</p>
              <p className="mt-2 text-[14px] leading-relaxed text-glass/85">Savo gamyba ir CNC staklės Panevėžyje — be tarpininkų, nuo brėžinio iki montavimo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="paslaugos"
        className="mt-3 grid grid-cols-12 gap-3"
      >
        {serviceLinks.map((service) => (
          <Link
            key={service.tag}
            to={service.to}
            className="group relative isolate col-span-12 flex min-h-[270px] flex-col justify-between overflow-hidden rounded-[22px] border border-line/70 p-6 text-glass ring-1 ring-ink/5 sm:col-span-6 md:col-span-4"
          >
            <img src={service.image} alt={service.imageAlt} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" width={800} height={600} />
            <div className="absolute inset-0 -z-10 bg-ink/55 transition-colors duration-300 group-hover:bg-ink/65" />
            <div className="flex items-start justify-between">
              <p className="font-mono text-[10px] text-glass/75">{service.tag}</p>
              <span aria-hidden="true" className="text-glass transition-transform group-hover:translate-x-1">→</span>
            </div>
            <div>
              <h2 className="max-w-[15ch] text-[23px] font-semibold leading-tight">{service.title}</h2>
              <p className="mt-3 max-w-[32ch] text-[13px] leading-relaxed text-glass/80">{service.text}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Gallery */}
      <section className="mt-3 grid grid-cols-12 gap-3">
        <div className="col-span-12 overflow-hidden rounded-[26px] border border-line/70 bg-glass/50 ring-1 ring-black/5 md:col-span-7">
          <img
            src={galleryKitchen}
            alt="Minimali virtuvė su matinio dažyto MDF spintelėmis"
            loading="lazy"
            className="h-full min-h-[300px] w-full object-cover"
            width={1200}
            height={800}
          />
        </div>
        <div className="col-span-12 grid grid-rows-2 gap-3 md:col-span-5">
          <div className="overflow-hidden rounded-[22px] border border-line/70 bg-glass/50 ring-1 ring-black/5">
            <img
              src={galleryWardrobe}
              alt="Drabužinė su plonomis riešutmedžio lentynomis"
              loading="lazy"
              className="h-full w-full object-cover"
              width={1072}
              height={624}
            />
          </div>
          <div className="overflow-hidden rounded-[22px] border border-line/70 bg-glass/50 ring-1 ring-black/5">
            <img
              src={galleryDetail}
              alt="Be siūlių matinio lako stalčiaus priekio briauna"
              loading="lazy"
              className="h-full w-full object-cover"
              width={1072}
              height={624}
            />
          </div>
        </div>
      </section>

      {/* About + testimonial */}
      <section className="mt-3 grid grid-cols-12 gap-3">
        <div className="col-span-12 flex flex-col justify-center rounded-[26px] border border-line/70 bg-glass/70 p-8 ring-1 ring-black/5 backdrop-blur-xl md:col-span-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Apie mus</p>
          <p className="mt-4 max-w-[34ch] text-[17px] leading-relaxed text-pretty text-ink/90">
            Espray — šeimos gamyba Panevėžyje. Dirbame su MDF, fanera ir kietąja mediena;
            kiekvieną briauną tikriname ranka.
          </p>
          <div className="mt-6 flex gap-8">
            <div>
              <p className="text-[22px] font-semibold">15+</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">metai</p>
            </div>
            <div>
              <p className="text-[22px] font-semibold">480</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                projektų
              </p>
            </div>
          </div>
          <Link
            to="/apie"
            className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-accent transition-colors hover:text-accent-deep"
          >
            Susipažinti →
          </Link>
        </div>
        <div className="col-span-12 flex flex-col justify-center rounded-[26px] border border-line/70 bg-glass/70 p-8 ring-1 ring-black/5 backdrop-blur-xl md:col-span-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Atsiliepimai
          </p>
          <blockquote className="mt-4 max-w-[30ch] text-[19px] leading-snug text-balance text-ink md:text-[22px]">
            „Spinteles gavome lygias kaip stiklas. Sumontavo per dieną, be dulkių pėdsakų."
          </blockquote>
          <p className="mt-4 font-mono text-[11px] text-muted">Greta M. — butas Vilniuje</p>
        </div>
      </section>

      {/* Quote request */}
      <section className="mt-3 rounded-[26px] border border-line/70 bg-glass/80 p-8 ring-1 ring-black/5 backdrop-blur-xl md:p-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <h2 className="text-[26px] font-semibold tracking-tight">Užklausa</h2>
            <p className="mt-3 max-w-[34ch] text-[14px] leading-relaxed text-muted">
              Parašykite, ką norite pagaminti — atsakysime per 1 darbo dieną.
            </p>
            <div className="mt-6 space-y-2 font-mono text-[12px] text-ink/80">
              <p>Nerijus Novikovas</p>
              <p>
                <a href="tel:+37060791028" className="hover:text-accent">
                  +370 607 91028
                </a>
              </p>
              <p>
                <a href="mailto:nerijus@espray.lt" className="hover:text-accent">
                  nerijus@espray.lt
                </a>
              </p>
              <p className="text-muted">Velžio kel. 48, Panevėžys</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
