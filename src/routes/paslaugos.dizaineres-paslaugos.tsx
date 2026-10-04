import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/service-detail";
import { servicePages } from "@/lib/services";

export const Route = createFileRoute("/paslaugos/dizaineres-paslaugos")({
  head: () => ({
    meta: [
      { title: "Dizainerės paslaugos — ESPRAY · Interjero projektai" },
      { name: "description", content: "Interjero koncepcijos, vizualizacijos, techniniai planai ir medžiagų parinkimas gyvenamosioms bei komercinėms erdvėms." },
      { property: "og:title", content: "Dizainerės paslaugos — ESPRAY · Interjero projektai" },
      { property: "og:description", content: "Profesionalios interjero dizainerės paslaugos nuo koncepcijos iki techninių planų." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ServiceDetail service={servicePages.designer} />;
}
