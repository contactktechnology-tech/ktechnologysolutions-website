# Site Deployment SOP — GitHub + Vercel + Cursor AI
## One document: explainer, checklist, bootstrap steps, and copy-paste agent prompt

**Purpose:** Deploy any static marketing site using the same route as `kabsolutions.co.uk` — local folder → GitHub → Vercel → custom domain — with a repeatable **Cursor AI** workflow and simple **push** commands.

**Who this is for:** You (or anyone on your team) setting up a **new domain** without touching existing live sites.

**Time to first deploy:** ~30–60 minutes (mostly DNS propagation).

---

## DEFAULT COMMANDS (every site — use these exact phrases)

Each project folder has **Cursor rules** in `.cursor/rules/` so the agent always recognises these commands. You do **not** need to paste a long prompt if the rules are installed.

| Command | When | What happens |
|---------|------|----------------|
| **`Bootstrap this site for GitHub and Vercel`** | **First** time in a new workspace, or deployment health check | Agent scaffolds files (new site) or verifies git/Vercel wiring (live site), per that folder’s `bootstrap-github-vercel.mdc` |
| **`push`** | After edits, go live | `git add` → commit → `git push` → Vercel deploys |
| **`RESTART WEBSITE`** | Preview locally | `http://localhost:8080/` |

**New site workflow (3 steps):**  
1. Open **that site’s folder** in Cursor  
2. Type: **`Bootstrap this site for GitHub and Vercel`**  
3. When ready: **`push`**

Copy rule templates for future domains from:  
`docs/cursor-rules/bootstrap-github-vercel.mdc.template` and `deploy-on-push.mdc.template`

---

## How to use this document

| Section | Use when |
|---------|----------|
| **§1 Fill-in worksheet** | Before you start — write your project values once |
| **§2 Human SOP (step-by-step)** | You are doing setup manually or supervising the agent |
| **§3 What to type in Cursor** | You need exact phrases and what they trigger |
| **§4 Bootstrap checklist** | Empty folder → first production deploy |
| **§5 Cursor agent prompt** | Copy entire block into a **new** Cursor workspace chat |
| **§6 Files to create** | `vercel.json`, `package.json`, `.cursor/rules/` templates |
| **§7 Command reference** | Quick lookup: git, local server, Vercel |
| **§8 Troubleshooting** | Something failed after push or DNS |

---

## §1 — Fill-in worksheet (do this first)

Copy this table and complete one row per new site.

| Field | Example (KTechnology) | Your new site |
|-------|----------------------|---------------|
| **Brand / site name** | KTechnology Solutions | ________________ |
| **Production domain** | `www.ktechnologysolutions.co.uk` | ________________ |
| **Apex domain (optional)** | `ktechnologysolutions.co.uk` | ________________ |
| **Local folder path** | `/Users/kgabrielkaseke/Documents/KTECHNOLOGYSOLUTIONSWEBSITE` | ________________ |
| **GitHub org/user** | `contactktechnology-tech` | ________________ |
| **GitHub repo name** | `ktechnologysolutions-website` | ________________ |
| **Git remote URL** | `https://github.com/contactktechnology-tech/ktechnologysolutions-website.git` | ________________ |
| **Sibling site (do not touch)** | `KABSOLUTIONS WEBSITE` / `kabsolutions-website` | ________________ |
| **Vercel** | New project (same login as KAB) | New project name: ______ |
| **Favicon/logo path** | e.g. `assets/logo.png` | ________________ |

**Rule:** One domain = one folder = one GitHub repo = one Vercel project. Never reuse another site’s repo or Vercel project for a different domain.

---

## §2 — Human SOP (what happens, in order)

### Phase A — Prepare on your Mac

| Step | What you do | When | Why | What happens |
|------|-------------|------|-----|--------------|
| A1 | Create empty folder in **Documents** (same level as other sites) | Before any code | Keeps projects isolated | Finder shows a dedicated project root |
| A2 | **Cursor → File → Open Folder** → select that folder | Before chatting with AI | Cursor only edits files in that workspace | Agent cannot accidentally change KAB or other sites |
| A3 | Create empty repo on **GitHub** (no README if agent will push) | Before first push | Remote must exist to receive code | Repo URL ready for `git remote add` |

---

### Phase B — Bootstrap the site (first files)

| Step | What you do | When | Why | What happens |
|------|-------------|------|-----|--------------|
| B0 | Ensure `.cursor/rules/bootstrap-github-vercel.mdc` exists (from template in `docs/cursor-rules/`) | Once per new project | Makes bootstrap the **default** command | Agent auto-knows paths and steps |
| B1 | **Cursor → Open Folder** → this site’s path only | Before any command | Isolates the repo | Correct workspace |
| B2 | Say: **`Bootstrap this site for GitHub and Vercel`** | **Default** — right after opening workspace | Triggers bootstrap rule | Files appear / git wired; may first-push |
| B3 | *(Optional)* Paste **§5** only if rules are missing or agent needs extra context | If bootstrap did not run correctly | Backup manual prompt | Same outcome as B2 |
| B4 | Review files in Finder / Cursor | Before first push | Catch wrong domain or sibling-site assets | You confirm branding and URLs |
| B5 | Say: **`push`** or run git commands in §7 | When files look good | Publishes to GitHub | Vercel builds if project linked |

**Note:** If the folder is completely empty, the agent cannot push until there is at least one commit worth of files.

---

### Phase C — Connect GitHub (first time only)

| Step | What you do | When | Why | What happens |
|------|-------------|------|-----|--------------|
| C1 | In terminal: `cd` to your folder, `git init`, `git branch -M main` | Once per folder | Local git history starts | `.git` folder created |
| C2 | `git remote add origin <YOUR_REPO_URL>` | Once per folder | Links folder to correct GitHub repo | `git push` knows where to send code |
| C3 | `git add .` → `git commit -m "Initial commit"` → `git push -u origin main` | After bootstrap files exist | Uploads code | GitHub shows files; Vercel can deploy |

**Why `main`:** Matches Vercel default production branch.

---

### Phase D — Vercel (once per domain)

| Step | What you do | When | Why | What happens |
|------|-------------|------|-----|--------------|
| D1 | Log in to **Vercel** (same account as KAB) | After first GitHub push | Hosting layer | Dashboard available |
| D2 | **Add New Project** → Import **your** GitHub repo only | Never reuse KAB’s project | One project per domain | New deployment pipeline |
| D3 | Framework: **Other**; Build: empty or `npm run build`; Output: `.` | Static HTML at repo root | No build step needed | Vercel serves files as-is |
| D4 | Add domains: `www.yoursite.com` and apex if needed | Before go-live | HTTPS + routing | Vercel shows DNS records |
| D5 | At domain registrar, add DNS records Vercel shows | After D4 | Points domain to Vercel | SSL issued; site loads on live URL |

**What happens on every later push:** GitHub receives commit → Vercel webhook runs → new deployment → production updates (usually 1–3 minutes).

---

### Phase E — Ongoing updates (daily workflow)

| Step | What you do | When | Why | What happens |
|------|-------------|------|-----|--------------|
| E1 | Edit files in Cursor (or ask agent to) | Whenever content/design changes | Source of truth is git | Local preview possible |
| E2 | Say **`RESTART WEBSITE`** or run local server (§7) | To preview before push | Avoids waiting for Vercel | `http://localhost:8080` |
| E3 | Say **`push`** | When ready for production | Triggers commit + deploy rule | See §3 |
| E4 | Hard-refresh live site (`Cmd+Shift+R`) | After Vercel shows Ready | Bypass browser cache | You see new CSS/copy |

---

## §3 — What to type in Cursor (command workflow)

These phrases are **intentional**. Use the **project workspace** for that domain only.

| You type | When to type it | Why | What the agent should do | What you should see |
|----------|-----------------|-----|--------------------------|---------------------|
| **`Bootstrap this site for GitHub and Vercel`** | **DEFAULT** — new workspace or deployment check | `.cursor/rules/bootstrap-github-vercel.mdc` (`alwaysApply: true`) | Scaffold (new) or verify wiring (live); see that site’s rule file | Files / readiness report |
| *(paste §5 prompt)* | Only if rules missing | Manual fallback | Same as bootstrap command | Agent confirms paths |
| **`RESTART WEBSITE`** | Local preview | See site before push | Run `python3 -m http.server 8080` in project folder | Agent gives `http://localhost:8080/` |
| **`push`** | Changes done; want live deploy | Matches deploy-on-push rule | `git add .` → `commit` → `push` (skip if no changes) | “Pushed to origin/main”; Vercel builds |
| **`push` with message: …** | Same as push but descriptive commit | Audit trail on GitHub | Uses **your** message instead of default | Clear commit history |
| **`Commit and push: <message>`** | You want a specific message | Release / fix labeling | `git add .` → `commit -m "..."` → `push` | One commit on GitHub |
| **`Do not commit`** *(implicit)* | Exploring ideas | Safety | Only edits files; no git | No deployment |

**Default commit message when you only say `push`:** `Test auto deployment`  
Override anytime: e.g. `push with message: Add services page`

---

## §4 — Bootstrap checklist (printable)

Use for every **new** domain.

- [ ] §1 worksheet completed  
- [ ] Folder created under Documents (or chosen path)  
- [ ] Cursor workspace = **that folder only**  
- [ ] GitHub repo created (name matches worksheet)  
- [ ] `.cursor/rules/bootstrap-github-vercel.mdc` + `deploy-on-push.mdc` in place  
- [ ] Typed **`Bootstrap this site for GitHub and Vercel`** (default command)  
- [ ] Agent bootstrapped or verified files  
- [ ] `vercel.json` uses **this** site’s favicon path  
- [ ] Canonical URLs / sitemap use **this** domain only  
- [ ] `git remote -v` → correct repo only  
- [ ] First `git push -u origin main` succeeded  
- [ ] Vercel **new** project imported  
- [ ] Domains added in Vercel + DNS configured  
- [ ] Production URL loads (HTTPS)  
- [ ] `.cursor/rules/deploy-on-push.mdc` present  
- [ ] Test: type `push` → Vercel deployment succeeds  

---

## §5 — Cursor agent prompt (copy from line below to end of fenced block)

**Instructions for the human:**  
1. Open the **new** site folder in Cursor.  
2. Replace every `{{PLACEHOLDER}}` using §1.  
3. Paste into **Agent** chat.  
4. Say: **`Bootstrap this site for GitHub and Vercel`**.

```markdown
# CURSOR AI AGENT — Static site deployment (GitHub + Vercel)

## PROJECT IDENTITY

| Field | Value |
|-------|--------|
| Brand | {{BRAND_NAME}} |
| Local path | {{LOCAL_FOLDER_PATH}} |
| GitHub | {{GITHUB_ORG}}/{{GITHUB_REPO}} |
| Remote | {{GIT_REMOTE_URL}} |
| Branch | main |
| Production URL | https://{{CANONICAL_HOST}} |
| Do NOT modify | {{SIBLING_PROJECT_PATH}} and its repo |

## YOUR ROLE

- Bootstrap and maintain a **static** website in **{{LOCAL_FOLDER_PATH}}** only.
- Deploy via: local files → `git push origin main` → GitHub → Vercel → {{CANONICAL_HOST}}.
- Use the same **account** as other sites ({{GITHUB_ORG}} / Vercel) but a **separate** repo and **separate** Vercel project.

## RULES

1. Never edit files outside {{LOCAL_FOLDER_PATH}}.
2. Never commit `.env`, keys, or passwords.
3. Do not commit unless the user says push, PUSH, commit, or deploy.
4. British English for public copy unless told otherwise.
5. One domain = one repo = one Vercel project.

## BOOTSTRAP (when user says "Bootstrap this site for GitHub and Vercel")

Create at minimum:

- `index.html` — homepage, title/meta for {{BRAND_NAME}}, canonical `https://{{CANONICAL_HOST}}/`
- `styles.css` — base styles
- `script.js` — minimal or empty
- `vercel.json` — see §6 in human SOP (cleanUrls, security headers, favicon redirect to {{FAVICON_PATH}})
- `package.json` — `"build": "echo 'Static site deployment - no build required'"`, optional `@vercel/analytics`
- `robots.txt` — allow all, sitemap URL on {{CANONICAL_HOST}}
- `sitemap.xml` — homepage URL only (expand later)
- `.cursor/rules/deploy-on-push.mdc` — push workflow with path {{LOCAL_FOLDER_PATH}}

Then:

```bash
cd "{{LOCAL_FOLDER_PATH}}"
git init
git branch -M main
git remote add origin {{GIT_REMOTE_URL}}
git add .
git commit -m "Initial commit: {{BRAND_NAME}} static site"
git push -u origin main
```

If remote exists, verify with `git remote -v` before pushing.

Tell the user to create a **new** Vercel project imported from {{GITHUB_REPO}} and add domains for {{CANONICAL_HOST}}.

## PUSH WORKFLOW

When user says **only** `push` or `PUSH`:

```bash
cd "{{LOCAL_FOLDER_PATH}}"
git add .
git commit -m "Test auto deployment"
git push
```

- No changes → report; no empty commit.
- User provides message in same utterance → use their message.

## LOCAL PREVIEW

When user says **RESTART WEBSITE**:

```bash
cd "{{LOCAL_FOLDER_PATH}}"
python3 -m http.server 8080
```

Reply with: http://localhost:8080/

## VERCEL SETTINGS (remind user)

- New project → import {{GITHUB_ORG}}/{{GITHUB_REPO}}
- Framework: Other / Static; Output: `.`
- Domains: {{CANONICAL_HOST}} and apex if required
- DNS at registrar per Vercel dashboard

## SUCCESS

- `git remote -v` shows only {{GIT_REMOTE_URL}}
- https://{{CANONICAL_HOST}} loads after DNS + deploy
- `push` updates production within minutes
```

---

## §6 — File templates (agent or human can create)

### Default Cursor rules (required per site)

Copy from `docs/cursor-rules/*.template`, replace placeholders, save as:

| File | Command it powers |
|------|-------------------|
| `.cursor/rules/bootstrap-github-vercel.mdc` | **`Bootstrap this site for GitHub and Vercel`** |
| `.cursor/rules/deploy-on-push.mdc` | **`push`** |

Set `alwaysApply: true` in both so every chat in that workspace knows the default commands.

**KTechnology (ready):** rules already in `.cursor/rules/`  
**KABSolutions (ready):** rules already in `.cursor/rules/`  
**Next site:** copy templates → fill §1 → then run bootstrap command once.

### `.cursor/rules/deploy-on-push.mdc`

Create this file in **each** project folder so `push` works in that workspace.

```markdown
---
description: When the user says PUSH or push, commit and push for Vercel deployment.
alwaysApply: true
---

# Deploy on "PUSH" / "push"

When the user message is **only** `PUSH`, `push`, or clearly means "deploy now", run without asking:

```bash
cd "{{LOCAL_FOLDER_PATH}}"
git add .
git commit -m "Test auto deployment"
git push
```

- Do not commit secrets (`.env`, credentials).
- No changes → skip empty commit and report.
- No force-push unless explicitly requested.
- If user gives a commit message in the same message, use theirs.

After push: report commit hash, confirm `origin/main`, remind to check Vercel and https://{{CANONICAL_HOST}}
```

Replace `{{LOCAL_FOLDER_PATH}}` and `{{CANONICAL_HOST}}` per site.

---

### `vercel.json` (minimal template)

```json
{
  "version": 2,
  "cleanUrls": true,
  "trailingSlash": false,
  "redirects": [
    {
      "source": "/favicon.ico",
      "destination": "/{{FAVICON_PATH}}",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; base-uri 'self'; form-action 'self' https://formspree.io; script-src 'self' https://esm.sh; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data:; connect-src 'self' https://formspree.io https://vitals.vercel-insights.com https://*.vercel-insights.com; frame-ancestors 'self'; upgrade-insecure-requests"
        }
      ]
    }
  ]
}
```

---

## §7 — Command reference (terminal)

Run from your project folder: `cd "{{LOCAL_FOLDER_PATH}}"`

| Command | When | What happens |
|---------|------|----------------|
| `python3 -m http.server 8080` | Local preview | Serves site at http://localhost:8080/ |
| `git status` | Before commit | Shows changed files |
| `git remote -v` | Verify setup | Must show **your** repo URL only |
| `git add .` | Stage all changes | Prepares commit |
| `git commit -m "message"` | Save snapshot | Local commit created |
| `git push` | Publish | GitHub updates → Vercel deploys |
| `git push -u origin main` | First push only | Sets upstream tracking |

---

## §8 — Troubleshooting

| Problem | Likely cause | What to do |
|---------|--------------|------------|
| `push` rejected / no remote | Remote not added | `git remote add origin <URL>` |
| Vercel builds wrong site | Wrong repo linked | New Vercel project; correct import |
| Old styles on live site | Cache | Hard refresh; bump `?v=` on CSS in HTML |
| 404 on clean URLs | Missing file or `vercel.json` | Add `.html` or fix `cleanUrls` paths |
| SSL pending | DNS not propagated | Wait; verify DNS in Vercel domain settings |
| Agent edited KAB files | Wrong Cursor workspace | Close; open correct folder only |
| Empty commit on `push` | No file changes | Edit files first |

---

## §9 — Multi-site map (keep updated)

| Site | Local folder | GitHub repo | Live domain |
|------|--------------|-------------|-------------|
| KABSolutions | `KABSOLUTIONS WEBSITE` | `kabsolutions-website` | www.kabsolutions.co.uk |
| KTechnology Solutions | `KTECHNOLOGYSOLUTIONSWEBSITE` | `ktechnologysolutions-website` | www.ktechnologysolutions.co.uk |
| *(next site)* | | | |

---

## Document version

- **Created:** 2026-06-01  
- **Pattern source:** kabsolutions.co.uk (GitHub `contactktechnology-tech`, Vercel static deploy)  
- **Location:** `KTECHNOLOGYSOLUTIONSWEBSITE/docs/SITE_DEPLOYMENT_SOP_AND_CURSOR_PROMPT.md`  
- **Copy this file** into each new project’s `docs/` folder and fill §1 for that domain.
