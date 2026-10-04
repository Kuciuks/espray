import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/service-detail";
import { servicePages } from "@/lib/services";

export const Route = createFileRoute("/paslaugos/baldu-gamyba")({
  head: () => ({
    meta: [
      { title: "Baldų gamyba — ESPRAY · Nestandartiniai baldai" },
      { name: "description", content: "Nestandartinių virtuvės, vonios, biuro baldų ir drabužinių gamyba pagal individualius matmenis." },
      { property: "og:title", content: "Baldų gamyba — ESPRAY · Nestandartiniai baldai" },
      { property: "og:description", content: "Baldų gamyba pagal individualius matmenis — ESPRAY Panevėžyje." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ServiceDetail service={servicePages.furniture} />;
}
