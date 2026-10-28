---
title: Run on RunPod
description: The steps every afterdark worker shares on RunPod Serverless.
---

Each worker's README has its own numbers (GPU, disk, build time). The steps are the same for all of them:

1. **Make your own private copy** — on the worker's GitHub page, **Use this template** → **Create a new repository** → **Private**. Your Civitai token will be in it, so it must stay private.
2. **Add your Civitai token** — civitai.com → Account settings → **Security & Apps** → **API Keys** → **Add API key** (**Read Only**). In your copy, open `Dockerfile` → ✏️ edit → replace `PASTE_YOUR_CIVITAI_TOKEN_HERE` → **Commit**. A Hugging Face model needs no token.
3. **Create the endpoint** — RunPod → **Serverless** → **New Endpoint** → **Deploy from a GitHub repository** → your copy, with the GPU and container disk from the README's **Create the endpoint** table. The first build takes a while (the README says how long).
4. **Create an API key** — RunPod → **Settings** → **API Keys** → **Restricted**, allowed only on this endpoint.

No RunPod account yet? [Sign up here](https://runpod.io?ref=qpguwapm) — a referral link: after you first add $10, RunPod gives you a bonus credit (usually $5–10).

RunPod's prices for each GPU: [runpod.io/pricing](https://www.runpod.io/pricing) (Serverless).
