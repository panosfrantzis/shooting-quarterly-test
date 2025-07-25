Here’s the full SQ_SOP.md inline:
# Shooting Quarterly — Standard Operating 
Procedure (SOP) > _Single-source reference file for day-to-day work on the **beta.shootingquarterly.com** 
code-base._ --- ## 0. Environment checklist | Tool | Command to confirm | Expected | 
|------|--------------------|----------| | Node 20 | `node -v` | `v20.x.x` | | pnpm (preferred) | `pnpm -v` 
| `8.x` | | GitHub CLI | `gh version` | ≥ 2.7 | | Netlify CLI (optional) | `netlify -v` | any | Install / 
update with: ```bash brew install node@20 pnpm gh netlify-cli ⸻ 1. Daily workflow (feature → deploy) git 
checkout main git pull # update git checkout -b feature/xyz # new branch # edit files under src/… git add . 
git commit -m "feat: short summary" git push -u origin feature/xyz # open PR, merge # Netlify auto-deploys 
main → beta site updates Rollback: Netlify › Deploys › “Restore & redeploy”. ⸻ 2. Local development pnpm 
install # first run / after deps change pnpm dev # hot-reload at http://localhost:4321 pnpm build # 
production build in /dist pnpm astro check # type/content validation ⸻ 3. Monthly maintenance Task Command 
/ action Dependencies pnpm update Build check pnpm astro check && pnpm build Netlify health latest deploy 
✔ + HTTPS active Forms backup Netlify › Forms › export CSV Mailing list backup MailerLite › export 
subscribers New content add ≥ 1 blog post / course update Branch cleanup `git branch -r –merged Repo 
snapshot (optional) git bundle create SQ-$(date +%Y%m).bundle --all ⸻ 4. Add a blog post mkdir -p 
src/content/posts nano src/content/posts/2025-08-01-title.md --- title: "Your Title" date: 2025-08-01 
description: "One-line summary" tags: ["training","mindset"] slug: "your-title" --- Markdown **content** 
goes here. Commit → push → merge → live. ⸻ 5. Final cut-over (move root domain)
	1. Change @ A records to Netlify 75.2.60.5 and 99.83.190.102
	2. Point www CNAME → <site>.netlify.app
	3. Netlify › Domain management › add shootingquarterly.com + www
	4. Wait for SSL ✔, then cancel Squarespace hosting. ⸻ Last updated: 2025-07-25 *How to save 
permanently* 1. In Obsidian: **File → New → Paste → Save as `SOP_Monthly.md`** inside your vault. 2. Or 
on disk: `nano SOP_Monthly.md`, paste, save. Now nothing can “delete itself” — it’s in your repo / vault # 
	• Ctrl + O → Enter (save
	•	Ctrl + X (exit)

25-07-2025

