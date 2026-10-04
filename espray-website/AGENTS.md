<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Decisions

- Quote requests are submitted through a public `createServerFn` (`src/lib/inquiries.functions.ts`) that validates with zod and inserts into the `inquiries` table using the generated admin client; the table allows anonymous INSERT only.
- Design system ("Atelier bento glass" direction) lives in `src/styles.css` tokens (`--color-paper/ink/glass/line/accent`, Inter + JetBrains Mono); components must use these tokens, not hardcoded colors.
- Service content is centralized in `src/lib/services.ts` and rendered through one shared detail layout so all dedicated service routes stay consistent.
