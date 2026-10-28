# afterdark-workers docs

The site at [afterdark-workers.github.io](https://afterdark-workers.github.io) — [Starlight](https://starlight.astro.build).
Pages are in `src/content/docs/`. `models.md` is written by `scripts/models.mjs` from the worker repos before each build (and once a day), so don't edit it by hand.

```sh
npm install
npm run dev     # http://localhost:4321
npm run build   # → dist/
```
