import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { createPortal } from "react-dom";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">404</p>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
          Puslapis nerastas
        </h1>
        <p className="mt-2 text-sm text-muted">
          Puslapio, kurio ieškote, nėra arba jis buvo perkeltas.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
          >
            Į pradinį
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-ink">
          Puslapis nepakrovė
        </h1>
        <p className="mt-2 text-sm text-muted">
          Įvyko nenumatyta klaida. Pabandykite atnaujinti arba grįžti į pradinį puslapį.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
          >
            Pabandyti dar kartą
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-line bg-glass px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-white"
          >
            Į pradinį
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ESPRAY — Nestandartiniai baldai · Panevėžys" },
      {
        name: "description",
        content:
          "Nestandartinių baldų gamyba Panevėžyje: baldų gamyba, projektavimas, dizainas, MDF dažymas, CNC frezavimas, transportavimas ir montavimas.",
      },
      { name: "author", content: "ESPRAY" },
      { property: "og:title", content: "ESPRAY — Nestandartiniai baldai · Panevėžys" },
      {
        property: "og:description",
        content:
          "Nestandartinių baldų gamyba nuo projekto iki montavimo. MDF dažymas, CNC frezavimas, savo gamyba Panevėžyje.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  return (
    <>
      {typeof document !== "undefined" && createPortal(<HeadContent />, document.head)}
      <div className="relative min-h-screen w-full overflow-x-hidden bg-paper text-ink">
        {/* Ambient glass glow */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute top-[-12%] left-[8%] h-[60vw] w-[60vw] rounded-full bg-accent/10 blur-[130px]" />
          <div className="absolute bottom-[-18%] right-[4%] h-[52vw] w-[52vw] rounded-full bg-[#8fa0ff]/10 blur-[130px]" />
        </div>
        <SiteHeader />
        <main>
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
