import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/service-detail";
import { servicePages } from "@/lib/services";

export const Route = createFileRoute("/paslaugos/projektavimas")({
  head: () => ({
    meta: [
      { title: "Projektavimas — ESPRAY · 2D ir 3D brėžiniai" },
      { name: "description", content: "Baldų projektavimas, tikslūs 2D ir 3D brėžiniai, ergonomiški sprendimai ir pasiruošimas gamybai." },
      { property: "og:title", content: "Projektavimas — ESPRAY · 2D ir 3D brėžiniai" },
      { property: "og:description", content: "Baldų projektavimas ir vizualizacijos prieš pradedant gamybą." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ServiceDetail service={servicePages.planning} />;
}
