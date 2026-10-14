# ESPRAY compiled homepage-only patch — v2

Apply to the contents of the earlier espray-static-site.zip, not to its React source project.
This is an overlay, NOT a standalone whole-site export. Keep every other existing file.
No backend, source TSX, new scaffold, build tools, or credentials are included.

## Install
1. Back up your current static website folder.
2. Copy index.html into that folder, replacing the existing index.html.
3. Copy the assets/ folder into the existing assets/ folder, merging and replacing the matching files.
4. Do not delete any existing assets. No rebuild or dependency installation is required.
5. Serve the website root with a static HTTP server, for example `python3 -m http.server 8000`,
   then open http://localhost:8000. Do not double-click index.html: absolute /assets/ URLs need an HTTP origin.
6. If hosted, invalidate cached index.html and assets/routes-CkoQFRWu.js (the route filename is intentionally preserved).

## Exact destination paths

| Action | Destination from website root |
| --- | --- |
| ADD | `assets/espray-original-logo.png` |
| UNCHANGED COPY | `assets/furniture-cabinetry-2-CCEkbwyp.jpg` |
| UNCHANGED COPY | `assets/furniture-kitchen-1-C58CPCYz.jpg` |
| UNCHANGED COPY | `assets/furniture-kitchen-2-D8-pmafG.jpg` |
| UNCHANGED COPY | `assets/home-craft-hero-yTzN17L-.jpg` |
| ADD | `assets/homepage-opening.css` |
| REPLACE | `assets/routes-CkoQFRWu.js` |
| REPLACE | `index.html` |

## Dependencies and scope
- The homepage keeps assets/routes-CkoQFRWu.js and all existing /assets/... photo paths.
- No extra JavaScript chunks or libraries are needed: animation code is included in that route.
- It reuses the existing assets/index-BmvICSLV.js, gallery-detail-Hxgmqofg.js,
  quote-form-D-KRTCkV.js, services-Cu48zI5n.js and styles-CBNzsbu7.css. Leave them in place.
- index.html explicitly references /assets/homepage-opening.css. The route also registers
  that stylesheet so entering the homepage from another page loads it correctly.
- Four existing JPGs are included byte-for-byte, for convenience. The original logo stays PNG.
- The existing static email form, service sections, gallery, other pages and favicon are unchanged.
- The logo fades away after 2.2 seconds; four photos crossfade every 3 seconds, with pause,
  previous/next controls and reduced-motion support.
- manifest.json records exact paths, actions, sizes, checksums and the original homepage checksum.
  README.md and manifest.json are documentation, not web-runtime files; keep them anywhere.

## Verification
Tested after overlaying this patch onto the earlier complete static export:
initial HTML hydration without React errors; intro removal; manual photo switching;
pause holding the current photo; navigation to Contact and back; direct entry on About
then client navigation home; mobile layout with no horizontal overflow; zero broken
images and zero HTTP failures. Desktop and mobile appearance inspected.

If your local export differs from the named base export, do not blindly overwrite it:
compare the manifest's base homepage checksum and the dependency filenames first.
