---
title: afterdark-workers
description: Ready-to-build serverless GPU workers for 18+ image and video models from Civitai and Hugging Face.
---

Ready-to-build serverless GPU workers for 18+ image and video models from Civitai and Hugging Face.
Each repo is a template: make a private copy, paste your Civitai token (Hugging Face ones need none), and build it on a GPU service.
The model is baked into the image and checked by SHA-256 at build time.

- **[Models](models/)** — every worker, the GPU it needs, and the services it runs on.
- **[Run on RunPod](runpod/)** — the steps every worker shares.
- **[Run on Modal](modal/)** — the same worker on Modal.

Every repo has a `pack.json`, so [Cobalt Pear](https://cobaltpear.github.io/) — a one-page web app — can drive it: add the repo URL, your endpoint ID and API key, then just type.

You download each model yourself (Civitai models with your own account) and are responsible for following its license.
