#强制推送
#!/usr/bin/env bash
set -e
git init
git add -A
git commit -m '🎉 发布新版本'
git push -f "https://${access_token}@github.com/zouzhibin/vue-admin-perfect.git"  master:gh-pages
exec /bin/bash




