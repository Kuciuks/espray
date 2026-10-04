# ESPRAY Website

Static React website built with Vite and TanStack Router. Netlify serves the generated files from `dist` and rewrites page routes to the SPA entry point.

## Development

Install Bun, then run:

```sh
bun install
bun run dev
```

## Production Build

```sh
bun run build
```

The build outputs a static site to `dist`. No database, server functions, or backend service is required.
