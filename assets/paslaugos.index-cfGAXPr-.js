import { n as e, r as t } from "./index-B8iIe9LF.js";
import { t as n } from "./services-BnB1S4vk.js";
var r = t();
const cardImages = [
  "furniture-kitchen-1.jpg",
  "planning-interior.jpg",
  "planning-kitchen.jpg",
  "mdf-panel-1.jpg",
  "cnc-mdf-1.jpg",
  "furniture-wardrobe.jpg",
];
function i() {
  return (0, r.jsxs)(`div`, {
    className: `mx-auto max-w-[1200px] px-6 pb-24 pt-12`,
    children: [
      (0, r.jsxs)(`header`, {
        className: `max-w-[48ch]`,
        children: [
          (0, r.jsx)(`p`, {
            className: `font-mono text-[11px] uppercase tracking-[0.24em] text-accent`,
            children: `Paslaugos · visos vienoje gamykloje`,
          }),
          (0, r.jsx)(`h1`, {
            className: `mt-5 text-[38px] font-semibold leading-[1.05] tracking-tight text-balance md:text-[52px]`,
            children: `Nuo idėjos iki sumontuoto baldo.`,
          }),
          (0, r.jsx)(`p`, {
            className: `mt-4 max-w-[52ch] text-[15px] leading-relaxed text-muted`,
            children: `Projektuojame, gaminame, dažome, frezuojame ir montuojame. Pasirinkite paslaugą ir sužinokite, kaip vyksta konkretus etapas.`,
          }),
        ],
      }),
      (0, r.jsx)(`section`, {
        className: `service-catalog`,
        "aria-label": `Visos paslaugos`,
        children: n.map((t, index) =>
          (0, r.jsxs)(
            `article`,
            {
              className: `service-product`,
              children: [
                (0, r.jsx)(`div`, {
                  className: `service-product-meta`,
                  children: (0, r.jsx)(`span`, {
                    className: `service-product-tag`,
                    children: t.tag,
                  }),
                }),
                (0, r.jsx)(`h2`, { className: `service-product-title`, children: t.title }),
                (0, r.jsx)(`div`, {
                  className: `service-product-image`,
                  children: (0, r.jsx)(`img`, {
                    src: `/assets/` + cardImages[index],
                    alt: t.imageAlt,
                    loading: `lazy`,
                    decoding: `async`,
                    width: 480,
                    height: 320,
                  }),
                }),
                (0, r.jsx)(`p`, { className: `service-product-description`, children: t.text }),
                (0, r.jsxs)(`div`, {
                  className: `service-product-actions`,
                  children: [
                    (0, r.jsx)(e, {
                      to: `/kontaktai`,
                      className: `service-product-button service-product-button-primary`,
                      "aria-label": `Užklausa: ` + t.title,
                      children: `Užklausa`,
                    }),
                    (0, r.jsx)(e, {
                      to: t.to,
                      className: `service-product-button`,
                      "aria-label": `Plačiau: ` + t.title,
                      children: `Plačiau →`,
                    }),
                  ],
                }),
              ],
            },
            t.tag,
          ),
        ),
      }),
      (0, r.jsxs)(`section`, {
        className: `mt-3 flex flex-col items-start justify-between gap-6 rounded-[26px] border border-line/70 bg-surface/80 p-8 ring-1 ring-line/20 backdrop-blur-xl md:flex-row md:items-center md:p-10`,
        children: [
          (0, r.jsxs)(`div`, {
            children: [
              (0, r.jsx)(`h2`, {
                className: `text-[24px] font-semibold tracking-tight`,
                children: `Nežinote, kur pradėti projektą?`,
              }),
              (0, r.jsx)(`p`, {
                className: `mt-2 max-w-[48ch] text-[14px] leading-relaxed text-muted`,
                children: `Parašykite arba paskambinkite — aptarsime idėją ir pasiūlysime tinkamą kelią.`,
              }),
            ],
          }),
          (0, r.jsx)(e, {
            to: `/kontaktai`,
            className: `shrink-0 rounded-full bg-accent px-6 py-3 text-[14px] font-medium text-primary-foreground transition-colors hover:bg-accent-deep`,
            children: `Susisiekti →`,
          }),
        ],
      }),
    ],
  });
}
export { i as component };
