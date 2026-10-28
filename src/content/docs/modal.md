---
title: Run on Modal
description: The same worker on Modal — the same Dockerfile, build and requests.
---

The ComfyUI workers also run on [Modal](https://modal.com), another serverless GPU service billed by the second, from `modal_app.py` in each repo.
It builds the same `Dockerfile` and answers the same requests as on RunPod (`/run`, `/status/<id>`), so a client that calls RunPod endpoints needs only the other address and key.
The [Models](../models/) page shows which workers have it.

On your computer, with Python 3.10 or newer, in a copy of your repo (`git clone` it, with your `Dockerfile` lines filled in):

```sh
pip install modal
modal setup                                                   # opens a page to sign in to Modal
modal secret create cobaltpear-key CP_KEY=<a long password you make up>
modal deploy modal_app.py                                     # builds, then prints the worker's address
```

- The address ending in `-api….modal.run` is your endpoint; send `Authorization: Bearer <that password>` with each request.
- GPU: the `GPU` line at the top of `modal_app.py` — set to the smallest one that fits the model. A worker turns off 60 s after its last picture.
- Modal needs a payment method on your account to use GPUs. Its prices: [modal.com/pricing](https://modal.com/pricing).
- Updates: run `modal deploy modal_app.py` again.
