# Setup — do this today (Aug 26)

## 1. Register
Fill this in if you haven't: https://forms.gle/BjJgdL4bZLE4G3

## 2. Create your hackathon repo
```bash
mkdir portfolio-agent && cd portfolio-agent
git init
echo "# Portfolio Agent — TrueForge Hackathon" > README.md
git add README.md
git commit -m "init"
gh repo create portfolio-agent --public --source=. --push
```
(No `gh` CLI? Just create the repo on github.com and `git remote add origin <url>` then `git push -u origin main`.)

Push everything through PRs from now on — never commit straight to `main`. Judges check for that.

## 3. Run TrueForge locally
Needs Node 22+.
```bash
node --version   # confirm >= 22
npx @truefoundry/trueforge
```
Open http://localhost:8790 — keep it on localhost, don't expose it.

## 4. Add Groq as your model provider
- Settings → Models → add provider → Groq
- Paste your Groq API key (same one from resume2portfolio)
- Pick a model (Llama 3.3 70B or whatever you already use in resume2portfolio for consistency)

## 5. Connect GitHub via MCP
- Settings → Connectors → find GitHub in the catalog → connect
- If GitHub isn't in the built-in catalog, add it by URL — there's a public GitHub MCP server (`github.com/github/github-mcp-server`), grab its URL from the repo's README
- This is what lets your agent actually read a user's real repos instead of trusting the resume text

## 6. Add Daytona sandbox
- Create a Daytona account → generate an API key (needs code-execution + file permissions)
- Settings → Sandbox providers → Daytona → paste key → save

## 7. Set up Qodo
- Sign in at app.qodo.ai (GitHub login is fastest)
- Integrations → SaaS → GitHub → Add installation
- Install the Qodo GitHub app on your `portfolio-agent` repo specifically
- Open your first PR (even just adding a `.gitignore`), comment `/agentic_review` on it if it doesn't auto-trigger
- This has to happen on real PRs throughout the week, not just once at the end

## 8. Add a skill
- Settings → Skills → import from GitHub, point it at your repo's `SKILL.md` (see the one I made you)

Once all seven of these are green, you're ready to compose the actual agent tomorrow.
