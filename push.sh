#强制推送
#!/usr/bin/env bash
set -e
git init
git add -A
git commit -m '🎉 feat: init project'
git push -f "https://${access_token}@gitee.com/yuanzbz/vue-admin-perfect.git" master
exec /bin/bash




