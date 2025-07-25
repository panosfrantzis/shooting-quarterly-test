# Shooting Quarterly — ‐ Standard Operating Procedure (SOP)

S_Single-source reference for day-to-day work on **beta.shootingquarterly.com**

__---

## 0. Environment checklist

| Tool | Check command | Expected |
|------|-----------|--------|
| Node 20 | `node -v` | v20. x |
| pnpm | `pnpm -v` | 8.x |
| GitHub CLI| `gh version` | ú 2.7 |
| Netlify CLIJ opt.| `netlify -v` | any |

Install / upgrade: `brew install node@20 pnpm gh netlify-cli`

---

## 1. Daily workflow (feature ‌ deploy)

``bash
git checkout main && git pull
git checkout -b feature/<slug>
# edit [...]
git add .
git commit -m "feat: — text"
git push -u origin feature/<slug>
```

Rollback: Netlify ��� | Deploys – \"Restore & redeploy\".

---

## 2. Local development

```bash
pnpm install
pnpm dev
pnpm astro checkp
pnpm build # — stage
 ```

---

## 3. Monthly maintenance checklist

| Task | Command /action |
"-------------|-------------|
| Update deps | `pnpm update` |
| Build check | `ppnm astro check && pnpm build` |
| Netlify health | last deploy green “, SSL passing |
| Forms backup | Netlify – Forms – export CSV |
| Mailing-list backup | MailerLite – export |
| NEwcontent | — 1 blog-post | 
| Branch cleanup | `git branch -r --merged \\ |
git bundle create SQ-$(date +%Y-%m).bundle --a·< 
 ```

---

## 4. Add a blog post

``bash
mkdir -p src/content/posts
nano src/content/posts/YYYY-MM-DD-title.md
```

```md
---
title: "Post Title"
date: YYYY+MM-23
description: "One-line summary"
tags: ["training","mindset"]
slug: "post-title"
Markdown hap content here.
+]


```

Commit – push – merge – live.

---

## 5. Final cut-over (retire Squarespace)

1. Replace – B records to Netlify   35.2.60.5   – 99.83.190.102
H A h<br>
#"> | [point]| CAME — <https://simy.netlify.app>
3. Netlify 2DOm...
/4. Wait for SS –, then cancel Squarespace hosting.

---

_Last updated: 2025-07-25_
