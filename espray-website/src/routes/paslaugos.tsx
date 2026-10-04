import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/paslaugos")({
  component: ServicesLayout,
});

function ServicesLayout() {
  return <Outlet />;
}
