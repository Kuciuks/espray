import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { ServicePageData } from "@/lib/services";

export function ServiceDetail({ service }: { service: ServicePageData }) {
  const heroImages = [
    { image: service.image, alt: service.imageAlt },
    ...service.gallery.map((item) => ({ image: item.image, alt: item.alt })),
  ].filter((item, index, images) => images.findIndex((candidate) => candidate.image === item.image) === index);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, [service, heroImages.length]);
  const visibleHero = heroImages[activeImage % heroImages.length]!;

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-8 md:pt-12">
      <nav className="mb-7 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted" aria-label="Kelias">
        <Link to="/paslaugos" className="transition-colors hover:text-accent">Paslaugos</Link>
        <span aria-hidden="true">/</span><span className="text-ink">{service.title}</span>
      </nav>

      <section className="grid grid-cols-12 gap-3">
        <div className="col-span-12 flex min-h-[420px] flex-col justify-between rounded-[26px] border border-line/70 bg-glass/70 p-8 ring-1 ring-black/5 backdrop-blur-xl md:col-span-6 md:p-11">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">{service.tag} · {service.eyebrow}</p>
            <h1 className="mt-6 max-w-[12ch] text-[40px] font-semibold leading-[1.03] tracking-tight text-balance md:text-[56px]">{service.title}</h1>
          </div>
          <div>
            <p className="max-w-[48ch] text-[16px] leading-relaxed text-ink/80">{service.intro}</p>
            <Link to="/kontaktai" className="mt-7 inline-flex items-center rounded-full bg-accent px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-accent-deep">Aptarti projektą →</Link>
          </div>
        </div>
        <div className={`relative col-span-12 min-h-[420px] overflow-hidden rounded-[26px] border border-line/70 bg-glass/50 ring-1 ring-black/5 md:col-span-6 ${service.portrait ? "bg-ink" : ""}`}>
          <img data-service-hero key={visibleHero.image} src={visibleHero.image} alt={visibleHero.alt} className={`animate-photo-fade absolute inset-0 h-full min-h-[420px] w-full ${service.portrait && activeImage === 0 ? "object-contain" : "object-cover"}`} width={1408} height={912} />
          <div className="absolute bottom-5 left-5 flex gap-2" aria-label="Nuotraukų pasirinkimas">
            {heroImages.map((image, index) => (
              <button key={`${image.image}-${index}`} type="button" onClick={() => setActiveImage(index)} aria-label={`Rodyti nuotrauką ${index + 1}`} className={`h-1 rounded-full transition-all ${index === activeImage ? "w-8 bg-accent" : "w-4 bg-glass/80"}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 space-y-16 md:mt-24 md:space-y-24">
        {service.sections.map((section, index) => (
          <article key={section.title} className="grid grid-cols-12 items-center gap-6 md:gap-12">
            <div className={`col-span-12 overflow-hidden rounded-[26px] ${index % 2 === 1 ? "md:order-2" : ""} md:col-span-7`}>
              <img src={section.image} alt={section.imageAlt} loading="lazy" className="aspect-[4/3] w-full object-cover" width={1200} height={900} />
            </div>
            <div className={`col-span-12 px-2 ${index % 2 === 1 ? "md:order-1" : ""} md:col-span-5 md:px-0`}>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">0{index + 1} · {service.title}</p>
              <h2 className="mt-4 text-[28px] font-semibold leading-tight tracking-tight md:text-[36px]">{section.title}</h2>
              <p className="mt-5 max-w-[48ch] text-[15px] leading-relaxed text-ink/75">{section.text}</p>
              <div className="mt-7 h-px w-16 bg-accent" />
            </div>
          </article>
        ))}
      </section>

      <section className="mt-20 border-y border-line/70 py-8 md:mt-28">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Paslaugos apima</p>
        <ul className="mt-6 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 md:grid-cols-4">
          {service.features.map((feature, index) => (
            <li key={feature} className="flex items-baseline gap-3 text-[14px] font-medium">
              <span className="font-mono text-[10px] text-accent">{String(index + 1).padStart(2, "0")}</span>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 md:mt-28">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Atlikti darbai</p>
            <h2 className="mt-3 text-[30px] font-semibold tracking-tight md:text-[40px]">Iš arti ir realiose erdvėse</h2>
          </div>
          <p className="max-w-[34ch] text-[13px] leading-relaxed text-muted">Nuotraukos iš ESPRAY darbų ir gamybos proceso.</p>
        </div>
        <div className="mt-8 grid grid-cols-12 gap-3">
          {service.gallery.map((item, index) => (
            <figure key={`${item.caption}-${index}`} className={`${index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5"} col-span-12 overflow-hidden rounded-[22px] bg-glass/50`}>
              <img src={item.image} alt={item.alt} loading="lazy" className={`${index % 3 === 0 ? "aspect-[16/10]" : "aspect-[4/3]"} w-full object-cover transition-transform duration-700 hover:scale-[1.02]`} width={1200} height={800} />
              <figcaption className="flex items-center gap-3 px-1 pb-2 pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>{item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-line/70 pt-10 md:mt-28 md:flex-row md:items-center">
        <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Toliau</p><h2 className="mt-2 text-[24px] font-semibold tracking-tight">{service.relatedLabel}</h2></div>
        <div className="flex flex-wrap gap-5 text-[14px] font-medium"><Link to={service.related} className="text-accent transition-colors hover:text-accent-deep">Kita paslauga →</Link><Link to="/paslaugos" className="text-ink/70 transition-colors hover:text-ink">Visos paslaugos</Link></div>
      </section>
    </div>
  );
}
