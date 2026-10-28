---
title: Use with Cobalt Pear
description: What's particular to these workers when you run them from Cobalt Pear.
---

[Cobalt Pear](https://cobaltpear.github.io/) is a free one-page app that runs your workers from your browser.
Its [docs](https://cobaltpear.github.io/docs/) cover the setup; this page is only what's different for the workers here.

## Adding one

These workers aren't on Cobalt Pear's model list — add each one as your own worker:

1. Build it and make the endpoint — [Run on RunPod](../runpod/).
2. Cobalt Pear → **Models** → **Custom** → paste the repo's address (`https://github.com/afterdark-workers/<repo>`, or your private copy) under «Your own worker» → **Add**.
3. Paste the endpoint ID next to it.

The repo's `pack.json` brings the sizes and the model's settings with it. Cobalt Pear calls RunPod; a worker [on Modal](../modal/) you call yourself for now.

## Prompts

Steps, CFG and sampler are already set in each worker to the creator's settings — hover the model's name in Cobalt Pear to see them. What changes is how you write the prompt:

| Model | Write |
|---|---|
| Pony Diffusion V6 XL | Start with `score_9, score_8_up, score_7_up, score_6_up, score_5_up, score_4_up,` |
| WAI-illustrious-SDXL | Danbooru tags, starting with `masterpiece, best quality, amazing quality,` — plus a rating tag (`general` · `sensitive` · `nsfw` · `explicit`) |
| Chroma1-Base · Chroma1-HD · SPARK.Chroma · NoctQ | A negative prompt is used |
| Chroma1-Flash · Krea 2 · Z-Image · Fluxmania | Full sentences; no negative prompt |

## Starting from a picture

- **Qwen-Image-Edit Rapid AIO NSFW** — press **Picture**, choose one, and write one change («make her hair red»). One change per picture keeps the face; several at once, or edits on top of edits, let it drift.
- **Wan 2.2 Enhanced NSFW** — press **Picture**, then describe the motion, not the picture. You get a 5-second video. It needs a 48 GB GPU.

## LoRAs

Every worker here can have LoRAs built in. In Cobalt Pear press **+ LoRA** → **Built into the worker**, paste the links, and it shows the `LORAS` line to put in your copy's `Dockerfile`. After the rebuild, pick which ones each picture uses from the **LoRA** button. Testing one first? **By link** works too ([LoRAs](https://cobaltpear.github.io/docs/loras/)).

## On screen

Results show as soon as they arrive. **Hide all** at the top puts them behind «Click to show» — handy on a shared screen; Cobalt Pear remembers which you picked.
Pictures stay in your browser: it calls your endpoint directly, so they don't pass through Cobalt Pear.
