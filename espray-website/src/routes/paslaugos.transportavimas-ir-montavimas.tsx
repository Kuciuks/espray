import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/service-detail";
import { servicePages } from "@/lib/services";

export const Route = createFileRoute("/paslaugos/transportavimas-ir-montavimas")({
  head: () => ({
    meta: [
      { title: "Transportavimas ir montavimas — ESPRAY" },
      { name: "description", content: "Saugus baldų transportavimas, profesionalus surinkimas, sureguliavimas ir montavimas kliento erdvėje." },
      { property: "og:title", content: "Transportavimas ir montavimas — ESPRAY" },
      { property: "og:description", content: "Baldų transportavimas ir preciziškas montavimas vietoje." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ServiceDetail service={servicePages.installation} />;
}
