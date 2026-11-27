"""Standard bookmark icons for AI-UI-UX-JS apps (allaiinc.org).
Every app gets the same tile: navy gradient rounded square, gold All.AI frame, one accent colour,
one vector glyph in the accent halo, and a 3-letter code on an accent underline.
Run: python3 icons/make_icons.py  -> writes icons/<slug>.svg and icons/<slug>.webmanifest
PNG sizes (180 apple-touch, 192, 512) are rendered from the SVG with any headless browser.
Add new apps to APPS below; reuse a GLYPH or add one (drawn in a 220-px box centred on 256,226)."""
import json, pathlib
HERE = pathlib.Path(__file__).parent
GLYPHS = {
 # hospital world-ship: spine, three spin rings, glass dome with a cross
 "ark": """<g fill="none" stroke="{a}" stroke-width="10" stroke-linecap="round">
  <line x1="138" y1="226" x2="374" y2="226"/>
  <ellipse cx="200" cy="226" rx="20" ry="74"/><ellipse cx="256" cy="226" rx="24" ry="92"/><ellipse cx="312" cy="226" rx="20" ry="74"/></g>
  <path d="M374 168a58 58 0 0 1 0 116z" fill="{a}" opacity=".35" stroke="#fff" stroke-width="6"/>
  <path d="M388 214h14v-14h12v14h14v12h-14v14h-12v-14h-14z" fill="#ff5d73"/>""",
 # air ambulance: rotor bar over a red medical cross, speed lines
 "airlift": """<rect x="150" y="116" width="212" height="12" rx="6" fill="#fff"/><rect x="250" y="122" width="12" height="34" fill="#fff"/>
  <path d="M226 160h60v58h58v60h-58v58h-60v-58h-58v-60h58z" fill="{a}" stroke="#fff" stroke-width="6" stroke-linejoin="round"/>
  <g stroke="#fff" stroke-width="8" stroke-linecap="round" opacity=".7"><line x1="112" y1="236" x2="146" y2="236"/><line x1="100" y1="262" x2="146" y2="262"/></g>""",
}
APPS = [
 {"slug": "AsclepiusArkHomecoming", "name": "Aaron's Asclepius Ark — Homecoming Missions", "short": "Ark Homecoming", "code": "ARK", "accent": "#56e1ff", "glyph": "ark", "bg": "#02060c"},
 {"slug": "Aarons-Ambulance-and-Airlifts-5", "name": "Aaron's Ambulance and Ark-Airlifts", "short": "Ark-Airlifts", "code": "AAA", "accent": "#ff5d73", "glyph": "airlift", "bg": "#08131d"},
]
def svg(app):
    a = app["accent"]
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#10283e"/><stop offset="1" stop-color="#02060c"/></linearGradient>
<linearGradient id="gd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff3c8"/><stop offset=".3" stop-color="#e8b95a"/><stop offset=".55" stop-color="#8a5f1c"/><stop offset=".8" stop-color="#f6d589"/><stop offset="1" stop-color="#6e4810"/></linearGradient>
<radialGradient id="halo" cx=".5" cy=".44" r=".42"><stop offset="0" stop-color="{a}" stop-opacity=".32"/><stop offset="1" stop-color="{a}" stop-opacity="0"/></radialGradient></defs>
<rect width="512" height="512" rx="112" fill="url(#bg)"/>
<rect x="16" y="16" width="480" height="480" rx="98" fill="none" stroke="url(#gd)" stroke-width="10"/>
<circle cx="256" cy="226" r="170" fill="url(#halo)"/><circle cx="256" cy="226" r="150" fill="none" stroke="{a}" stroke-width="5" opacity=".55"/>
{GLYPHS[app["glyph"]].format(a=a)}
<text x="256" y="446" text-anchor="middle" font-family="system-ui,-apple-system,'Segoe UI',Helvetica,Arial,sans-serif" font-weight="800" font-size="64" letter-spacing="8" fill="#fff">{app["code"]}</text>
<rect x="186" y="466" width="140" height="9" rx="4.5" fill="{a}"/>
</svg>"""
def manifest(app):
    s = app["slug"]
    return {"name": app["name"], "short_name": app["short"], "start_url": f"../{s}.html", "scope": "../", "display": "standalone",
            "background_color": app["bg"], "theme_color": app["bg"],
            "icons": [{"src": f"{s}-192.png", "sizes": "192x192", "type": "image/png"}, {"src": f"{s}-512.png", "sizes": "512x512", "type": "image/png"},
                      {"src": f"{s}.svg", "sizes": "any", "type": "image/svg+xml"}]}
if __name__ == "__main__":
    for app in APPS:
        (HERE / f"{app['slug']}.svg").write_text(svg(app))
        (HERE / f"{app['slug']}.webmanifest").write_text(json.dumps(manifest(app), indent=2, ensure_ascii=False))
        print("wrote", app["slug"])
