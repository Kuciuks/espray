# ESPRAY project baseline

Discovery date: 2026-11-08 (Europe/Vilnius). Scope: read-only inspection of the existing project, with this report as the only added file. Root: `D:/Main/projects/espray-website-source`.

## 1. Summary and evidence limits

This checkout is a **compiled, pre-rendered React website**, rather than the original editable React source project. It contains HTML pages and minified JavaScript/CSS assets. No application `package.json`, dependency lockfile, `src/` directory, source maps, or build configuration was found outside the skill/tool directories.

The output is compatible in principle with static hosting. The configured deployment target is Netlify, publishing `.`. Actual Netlify account settings, production deployment, domain, and production behavior were not accessed or verified.

`AGENTS.md` was read. No skill was activated, no skill instructions or scripts were executed, and no application code, packages, or deployment settings were changed. No external network requests or browser/runtime tests were performed. Findings below distinguish bundle evidence from inferences; existing business copy is not independent verification of business facts.

## 2. Actual framework, tooling, routing, and deployment

| Area | Verified finding | Evidence / uncertainty |
| --- | --- | --- |
| React | React and React DOM report `19.2.8`; the document is hydrated inside React StrictMode. | `assets/index-BmvICSLV.js`: version strings and `hydrateRoot(document, ...)`. These are shipped bundle versions, not a reproducible dependency manifest. |
| Router | TanStack Router with a root route, nested service routes, lazy page chunks, and scroll restoration. | Main bundle route tree, `tanstack_router_reload`, HTML `$_TSR.router`, and `tsr-scroll-restoration-v1_3`. Exact router version unavailable. |
| Application framework | TanStack Start client machinery is present; a TanStack Start origin is strongly indicated. | Main bundle `window.__TSS_START_OPTIONS__`, serialization and hydration flow. Original framework package manifest and configuration are absent, so exact package/version and generation settings are unverified. |
| Bundler | Vite-generated assets. | Main bundle `__vite__mapDeps`, dynamic module preloads, and `vite:preloadError`. Exact Vite version and original build command unavailable. |
| Styling | Tailwind CSS output plus custom CSS and some inline styles. | `assets/styles-CBNzsbu7.css` banner reports Tailwind `v4.3.3`; `assets/homepage-opening.css` contains custom rules. No editable Tailwind build setup found. |
| Rendering | Eleven HTML documents contain actual page content and hydration state. Client navigation loads route chunks. | Root and nested `index.html` files and main bundle. Pre-rendered output does not establish a deployed server-rendering backend. |
| Deployment | `netlify.toml` has only `[build]` and `publish = "."`. | No build command, functions, redirects, or headers are configured in that file; no `_redirects` or `_headers` file found in application inventory. Account-level overrides are unknown. |
| Local preview | Node's native HTTP/filesystem/path modules serve files on `127.0.0.1:4173`. Directories resolve to `index.html`. | `.vscode/preview-server.cjs`; VS Code task `Start homepage preview`. This is a local static preview helper, not an application backend. It was read, not started. |

No Next.js source/configuration, custom application backend, database, authentication, Firebase, Supabase, or Express application was found in the inspected application files. This is a discovery finding, not a comprehensive security audit.

## 3. Current project structure

```text
espray-website-source/
├── AGENTS.md
├── index.html                         # pre-rendered homepage
├── apie/index.html
├── galerija/index.html
├── kontaktai/index.html
├── paslaugos/
│   ├── index.html
│   ├── baldu-gamyba/index.html
│   ├── cnc-frezavimas/index.html
│   ├── dizaineres-paslaugos/index.html
│   ├── mdf-dazymas/index.html
│   ├── projektavimas/index.html
│   └── transportavimas-ir-montavimas/index.html
├── assets/                            # 81 files: 17 JS, 2 CSS, 61 JPG, 1 PNG
├── favicon.ico
├── robots.txt
├── netlify.toml
├── skills-lock.json                   # skill installation metadata, not app dependency lock
├── espray-opening-compiled-patch-v2/   # earlier compiled homepage overlay
│   ├── README.md
│   ├── manifest.json
│   ├── index.html
│   └── assets/
├── .vscode/
│   ├── tasks.json
│   └── preview-server.cjs
├── .agents/skills/                    # 14 project skills
├── .tools/skill-audit-env/            # existing Python skill-auditor environment
├── .tmp/                             # no immediate entries returned
├── .git/
└── docs/audits/00-project-baseline.md # added by this task
```

The patch README describes an overlay for an earlier static export, explicitly excluding source TSX and build tools. It corroborates the compiled-export finding but its historic test claims were not rerun. Root assets have evolved: for example, current `homepage-opening.css` and `routes-CkoQFRWu.js` sizes differ from the patch manifest. Do not treat the patch directory as the current source of truth or reapply it blindly.

Because Netlify publishes the root, documentation, patch copies, and development directories warrant a later publish-output review. Whether Netlify actually includes or serves each directory was not tested.

## 4. Pages and components

All 11 application HTML documents use Lithuanian content, with page-specific titles. Main navigation links to services, gallery, about, and contact; the main enquiry CTA links to `/kontaktai`. The shared shell includes header, desktop navigation, mobile menu button, and footer. Responsive utility classes and custom media queries are present; actual device layouts and keyboard behavior remain untested.

| Route | Content | Main compiled component |
| --- | --- | --- |
| `/` | Logo intro, four-image hero carousel, service cards, about section, counters, testimonial, enquiry form | `assets/routes-CkoQFRWu.js` |
| `/apie` | Business introduction, values, team, contact details, CTA | `assets/apie-BKb1veAG.js` |
| `/galerija` | Four labeled image cards and enquiry CTA | `assets/galerija-OSNRs02z.js` |
| `/kontaktai` | Team telephone contacts, email, address, company code, social links, enquiry form, Google map | `assets/kontaktai-Du8os8Gm.js` |
| `/paslaugos` | Six-service overview | `assets/paslaugos.index-OCeaBuT3.js` with `assets/paslaugos-C7v7oZUh.js` parent |
| `/paslaugos/baldu-gamyba` | Custom furniture manufacturing | `assets/paslaugos.baldu-gamyba-CE6CDmlO.js` |
| `/paslaugos/cnc-frezavimas` | CNC routing/milling | `assets/paslaugos.cnc-frezavimas-CAvTLT-I.js` |
| `/paslaugos/dizaineres-paslaugos` | Interior design | `assets/paslaugos.dizaineres-paslaugos-BvLN5arF.js` |
| `/paslaugos/mdf-dazymas` | MDF painting | `assets/paslaugos.mdf-dazymas-BmJJaPH2.js` |
| `/paslaugos/projektavimas` | Design/drawings and visualization | `assets/paslaugos.projektavimas--3vkF2k_.js` |
| `/paslaugos/transportavimas-ir-montavimas` | Delivery and installation | `assets/paslaugos.transportavimas-ir-montavimas-mMvdASpX.js` |

Shared modules:

- `assets/index-BmvICSLV.js`: React runtime, router, route metadata/tree, shared shell, and hydration entry.
- `assets/services-Cu48zI5n.js`: service overview/detail data, image references, features, and related-service links.
- `assets/service-detail-DuKokTUC.js`: shared service layout, image carousel (4.5-second interval), content sections, feature list, breadcrumbs, and related links.
- `assets/quote-form-D-KRTCkV.js`: shared enquiry form.
- `assets/gallery-detail-Hxgmqofg.js`: shared gallery image paths.

No separate privacy-policy page or XML sitemap appeared in the application file inventory. `robots.txt` permits crawling for all agents, with additional named bot sections. This task did not audit indexing, structured data, or SEO quality.

## 5. Styles, assets, and external resources

The visual system uses paper/ink/glass/accent colors, rounded panels, translucent backgrounds, a constrained main content width, and utility-driven responsive grids. Shared generated CSS is `assets/styles-CBNzsbu7.css`; homepage-specific layout, image effects, intro animation, and reduced-motion rules live in `assets/homepage-opening.css`. The homepage also contains inline animation rules. Some service card pointer/hover behavior is customized in the homepage stylesheet and needs runtime validation before changes.

Root assets include furniture/project photos, CNC and MDF images, planning visualizations, designer portraits, and `espray-original-logo.png`. Both hashed and readable image filenames exist. Their provenance, permission to publish, and authenticity as ESPRAY customer work were not established. The gallery reuses the same image variable for the kitchen and office cards; labels alone do not prove separate completed projects.

Existing external resources include Google Fonts (Inter and JetBrains Mono via `fonts.googleapis.com` / `fonts.gstatic.com`), a lazy Google Maps iframe on the contact page, and outbound Facebook/Instagram links. These were discovered in existing code; this task did not add or load them. Historic owner approval and privacy arrangements are unknown.

Existing copy includes a 15-year counter target, a 480-project counter target, a named customer testimonial, and one-working-day response promises. These are existing website claims, not verified business facts. Retain their uncertainty in future content/legal work until the owner supplies evidence.

## 6. Contact functionality

`assets/quote-form-D-KRTCkV.js` is used on the homepage and contact page:

1. It prevents normal form submission and reads `name`, `contact`, and `message` through `FormData`.
2. Required fields have maximum lengths of 200, 300, and 5,000 characters respectively.
3. It URI-encodes an email subject/body and assigns `window.location.href` to `mailto:nerijus@espray.lt?...`.
4. It immediately sets state to `sent`, resets the form, and displays a thank-you message promising follow-up within one working day.

**Delivery is not confirmed.** This opens a draft through an available email handler; the visitor must send it separately. No submission request or delivery acknowledgement is present in this handler. The success state therefore creates a misleading impression and conflicts with the AGENTS.md requirement to claim delivery only after actual success. The form was not submitted during discovery.

No Netlify Forms attributes or form backend integration are present in the inspected shared form. The initial HTML form has no explicit method/action. Behavior without JavaScript has not been tested. Netlify Forms must not be enabled without approval.

Existing code displays these business contacts (source values only, not independently verified):

- Nerijus / Nerijus Novikovas: `+370 607 91028`, `nerijus@espray.lt`.
- Norbertas: `+370 643 01860`.
- Evelina: `+370 630 71541`.
- Address: `Velžio kel. 48, LT-36148 Panevėžys`.
- Company code shown on about/contact pages: `307071953`.

Telephone and email links use `tel:` and `mailto:`. Contact/about pages and forms should remain consistent if owner-verified details change. No contact delivery or telephone operation was tested.

## 7. Git baseline and commands

Before report creation:

- Branch: `feature/ft-0007`.
- HEAD: `3de3f26` — `Merge pull request #9 from Kuciuks/feature/ft-0006`.
- `git status --porcelain=v1` and `git status --short --untracked-files=all`: empty output.
- `git diff --stat` and `git diff --cached --stat`: empty output.
- Thus no pre-existing tracked edits, staged edits, or non-ignored untracked files were reported. Ignored files were not exhaustively inventoried.

| Command category | Existing command / finding | Execution in this task |
| --- | --- | --- |
| Application build | None discoverable; no application package manifest or build script | Not run |
| Application lint | None discoverable; no application lint configuration/script | Not run |
| Application tests | No application test suite/configuration/script found | Not run |
| Local preview | `node .vscode/preview-server.cjs`, also configured as VS Code task `Start homepage preview` | Read only; not run |
| Historic patch preview suggestion | Patch README suggests `python3 -m http.server 8000` | Not run; documentation suggestion, not a project build command |
| Skill tools | Skill scripts, security-audit validator tests, and an existing Python audit environment exist | Not application tests; not run |

Discovery commands used `Get-Content`, `Get-ChildItem`, `Test-Path`, `rg --files`, PowerShell regex extraction over compiled files, and the Git commands above plus `git branch --show-current` and `git log -1`. One combined inventory command initially failed PowerShell parsing before execution and was corrected. No build/test pass is claimed.

## 8. Installed skill paths

Paths below were verified by filename enumeration only. No `SKILL.md` was opened or applied. A disk-installed skill is not necessarily enabled for the current session. No project `.claude/skills` directory was present.

### Project-local skills

```text
D:/Main/projects/espray-website-source/.agents/skills/accessibility/SKILL.md
D:/Main/projects/espray-website-source/.agents/skills/best-practices/SKILL.md
D:/Main/projects/espray-website-source/.agents/skills/copywriting/SKILL.md
D:/Main/projects/espray-website-source/.agents/skills/core-web-vitals/SKILL.md
D:/Main/projects/espray-website-source/.agents/skills/cro/SKILL.md
D:/Main/projects/espray-website-source/.agents/skills/gdpr-expert/SKILL.md
D:/Main/projects/espray-website-source/.agents/skills/performance/SKILL.md
D:/Main/projects/espray-website-source/.agents/skills/privacy-policy/SKILL.md
D:/Main/projects/espray-website-source/.agents/skills/schema/SKILL.md
D:/Main/projects/espray-website-source/.agents/skills/security-audit/SKILL.md
D:/Main/projects/espray-website-source/.agents/skills/seo/SKILL.md
D:/Main/projects/espray-website-source/.agents/skills/seo-audit/SKILL.md
D:/Main/projects/espray-website-source/.agents/skills/site-architecture/SKILL.md
D:/Main/projects/espray-website-source/.agents/skills/web-quality-audit/SKILL.md
```

### Configured user/system and plugin skill roots

```text
C:/Users/benas/.agents/skills/find-skills/SKILL.md
C:/Users/benas/.codex/skills/.system/imagegen/SKILL.md
C:/Users/benas/.codex/skills/.system/openai-docs/SKILL.md
C:/Users/benas/.codex/skills/.system/review-agent/SKILL.md
C:/Users/benas/.codex/skills/.system/skill-creator/SKILL.md
C:/Users/benas/.codex/skills/.system/skill-installer/SKILL.md
C:/Users/benas/.codex/plugins/cache/openai-curated-remote/plugin-management/0.1.0/skills/plugin-management/SKILL.md
C:/Users/benas/.codex/plugins/cache/openai-curated-remote/sites/1.1.4/skills/sites/SKILL.md
C:/Users/benas/.codex/plugins/cache/openai-curated-remote/sites/1.1.4/skills/sites-remix/SKILL.md
C:/Users/benas/.codex/plugins/cache/openai-curated-remote/work-pets/0.1.6/skills/create-pet/SKILL.md
C:/Users/benas/.codex/plugins/cache/openai-curated-remote/work-pets/0.1.6/skills/pets/SKILL.md
C:/Users/benas/.codex/plugins/cache/openai-curated-remote/work-pets/0.1.6/skills/update-pet/SKILL.md
```

This enumerates the project and explicitly configured skill roots, not unrelated directories or an exhaustive scan of every plugin cache version.

## 9. Architecture conflicts and owner decisions

| Finding | Relationship to AGENTS.md | Outstanding decision / evidence |
| --- | --- | --- |
| Original React source/build tooling absent | React + JavaScript runtime and static output match the required architecture, but preserving/rebuilding the original tooling cannot currently be verified. The folder name does not establish source availability. | Locate the original source project and dependency/configuration files before substantial implementation. No framework migration is proposed. |
| Form shows success after opening an email draft | Existing behavior conflicts with the delivery-success rule. | A later authorized task should make the email handoff truthful; any managed submission service requires owner approval. No fix made here. |
| Existing Google Fonts and Maps | Third-party resources already exist; AGENTS.md forbids introducing them without approval. This discovery introduced none and does not establish a historic violation. | Confirm approval and processing/privacy requirements before legal or integration changes. |
| Existing claims, testimonial, image labels, contact/company details | Repository text alone cannot establish accuracy or satisfy the prohibition on invented claims. | Owner evidence is needed before endorsing these claims or drafting legal statements from them. |
| Root is deployment output and development workspace | Static Netlify architecture is preserved, but publish scope is broad. | Verify deployed artifact contents/account configuration in a separately authorized task. |

No architecture changes are required to finish this baseline. No approval is needed for the completed report. Build reproducibility, runtime behavior, live hosting, delivery, image provenance, and business/legal accuracy remain unverified. Stop here; no subsequent audit, skill, remediation, commit, push, or deployment is part of this task.
