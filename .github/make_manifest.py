"""Write manifest.json: every root-level .html/.py app with its size, git blob sha,
first-added and last-updated commit dates, plus a build number (total commits).
One pass over git history — takes about a second even for thousands of commits."""
import json, re, subprocess
from datetime import datetime, timezone

APP = re.compile(r'^[^/]+\.(html|py)$', re.I)

def utc(iso):  # one format everywhere → dates sort correctly as strings
    return datetime.fromisoformat(iso).astimezone(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')

def git(*args):
    return subprocess.run(['git', '-c', 'core.quotepath=off', *args],
                          capture_output=True, text=True, check=True).stdout

# first-added / last-updated per file, oldest → newest
added, updated, when = {}, {}, None
for line in git('log', '--reverse', '--no-renames', '--name-status', '--format=>%cI').splitlines():
    if line.startswith('>'):
        when = utc(line[1:])
        continue
    if not line.strip():
        continue
    status, *paths = line.split('\t')
    path = paths[-1]
    if not APP.match(path):
        continue
    if status.startswith('D'):
        added.pop(path, None); updated.pop(path, None)
    else:
        added.setdefault(path, when); updated[path] = when

# current files: mode type sha size<TAB>path
files = []
for line in git('ls-tree', '-l', 'HEAD').splitlines():
    meta, path = line.split('\t', 1)
    _, kind, sha, size = meta.split()
    if kind == 'blob' and APP.match(path):
        files.append({'n': path, 's': int(size), 'sha': sha,
                      'u': updated.get(path, ''), 'a': added.get(path, '')})

head_sha, head_date, head_msg = git('log', '-1', '--format=%H%n%cI%n%s').split('\n', 2)
manifest = {
    'n': int(git('rev-list', '--count', 'HEAD')),
    'sha': head_sha, 'date': utc(head_date), 'msg': head_msg.strip(),
    'files': sorted(files, key=lambda f: f['n'].lower()),
}
with open('manifest.json', 'w', encoding='utf-8') as f:
    json.dump(manifest, f, ensure_ascii=False, separators=(',', ':'))
print(f"manifest.json: build #{manifest['n']}, {len(files)} apps")
