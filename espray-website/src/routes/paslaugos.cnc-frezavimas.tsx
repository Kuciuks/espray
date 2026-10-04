import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/service-detail";
import { servicePages } from "@/lib/services";

export const Route = createFileRoute("/paslaugos/cnc-frezavimas")({
  head: () => ({
    meta: [
      { title: "CNC frezavimas — ESPRAY · Tikslus apdirbimas" },
      { name: "description", content: "Tikslus MDF, medienos ir faneros frezavimas, graviravimas bei sudėtingų dekoratyvinių elementų pjovimas." },
      { property: "og:title", content: "CNC frezavimas — ESPRAY · Tikslus apdirbimas" },
      { property: "og:description", content: "CNC frezavimas baldų, interjero ir dekoro elementams." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ServiceDetail service={servicePages.cnc} />;
}
