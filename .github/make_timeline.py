"""Generate the dated app catalog for the exact Pages deployment."""
import json
import subprocess
from pathlib import Path

def git(*args):
    return subprocess.check_output(["git", "--literal-pathspecs", *args])

apps = []
for raw in git("ls-files", "-z").split(b"\0"):
    if not raw:
        continue
    name = raw.decode("utf-8")
    p = Path(name)
    if "/" in name or p.suffix.lower() not in (".html", ".py") or name in ("index.html", "python-runner.html"):
        continue
    date = git("log", "-1", "--format=%cI", "HEAD", "--", name).decode().strip()
    if not date:
        raise RuntimeError("No Git history for " + name)
    apps.append(dict(name=name, type="file", size=p.stat().st_size, date=date))
if not apps:
    raise RuntimeError("Empty catalog")
apps.sort(key=lambda a: a["name"])
Path("timeline.json").write_text(json.dumps(apps, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Generated {len(apps)} dated apps")
