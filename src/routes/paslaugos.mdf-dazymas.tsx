import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/service-detail";
import { servicePages } from "@/lib/services";

export const Route = createFileRoute("/paslaugos/mdf-dazymas")({
  head: () => ({
    meta: [
      { title: "MDF dažymas — ESPRAY · Matinė ir blizgi apdaila" },
      { name: "description", content: "Profesionalus MDF dažymas, plati RAL spalvų paletė, matinė arba blizgi danga naujiems ir atnaujinamiems baldams." },
      { property: "og:title", content: "MDF dažymas — ESPRAY · Matinė ir blizgi apdaila" },
      { property: "og:description", content: "Profesionalus MDF dažymas ir kokybiška paviršiaus apdaila." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ServiceDetail service={servicePages.painting} />;
}
