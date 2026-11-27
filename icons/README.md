# Standard app icons

Every deployed app gets the same bookmark tile so the home screen and the allaiinc.org gallery read as one family:
navy gradient rounded square · gold All.AI frame · one accent colour and halo · one vector glyph · 3-letter code on an accent underline.

Per app: `icons/<slug>.svg` (favicon), `<slug>-180.png` (apple-touch, solid corners), `<slug>-192.png` / `<slug>-512.png` (manifest), `<slug>.webmanifest`.
Head tags in the app:

```html
<link rel="icon" type="image/svg+xml" href="icons/<slug>.svg">
<link rel="apple-touch-icon" href="icons/<slug>-180.png">
<link rel="manifest" href="icons/<slug>.webmanifest">
<meta name="apple-mobile-web-app-title" content="<short name>">
```

Add the app to `APPS` in `make_icons.py`, run `python3 icons/make_icons.py`, then render the PNGs from the SVG.
