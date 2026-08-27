# Portfolio Agent

An agent that turns a resume + GitHub username into a verified, deployed
portfolio site — built on TrueForge for the Agent Harness Hackathon.

## The problem

Building a portfolio site from a resume today means manually reading the
resume, digging through GitHub for the real story behind each project,
writing copy, coding the site, and deploying it. This agent does that whole
loop, with a human checkpoint before anything goes live.

## What the agent actually does

1. Parses the input resume
2. **Subagent 1** researches the user's real GitHub activity via an MCP tool
   (not just resume claims)
3. **Subagent 2** drafts portfolio copy using the `portfolio-copy` skill
4. Generates the actual Next.js site code
5. **Sandbox** runs `npm install && npm run build` to verify the site
   actually builds before showing it to the user
6. **Approval gate**: agent pauses and asks before deploying — nothing ships
   without explicit confirmation
7. Deploys to Vercel and reports the live URL
8. Session persists — an interrupted run can be resumed later

## TrueForge capabilities used

- [x] MCP tools (GitHub)
- [x] Skills (`portfolio-copy`)
- [x] Sandbox (Daytona — code execution + build verification)
- [x] Subagents (research + copywriting split)
- [x] Human approval (pre-deploy gate)
- [x] Persistent sessions (resumable runs)

## Architecture

```
resume + github username
        │
        ▼
  [Orchestrator agent]
        │
   ┌────┴─────┐
   ▼          ▼
[Research   [Copy subagent]
 subagent]   (portfolio-copy skill)
 (GitHub MCP)
   │          │
   └────┬─────┘
        ▼
  generate-site.js (sandbox)
        │
        ▼
  npm run build (sandbox, verified)
        │
        ▼
  ⏸ human approval
        │
        ▼
  deploy to Vercel
```

## Running it

1. `npx @truefoundry/trueforge`, open http://localhost:8790
2. Add Groq as a model provider
3. Connect the GitHub MCP connector
4. Add Daytona as a sandbox provider
5. Import `SKILL.md` as a skill
6. Paste `AGENT_INSTRUCTIONS.md` into a new agent, save it
7. Run it with a resume + GitHub username

## Qodo Code Review Evidence

- Representative merged PR: https://github.com/Zoymusk/portfolio-agent/pull/1
- What Qodo surfaced: No issues found on this PR — it was a documentation-only change (README update)
- What I changed / intentionally dismissed: N/A for this PR; will update as code PRs come in
- Follow-up review against final code: [to be added as the project develops]

## Disclosure

The idea, architecture decisions, and project direction are entirely my own.
AI coding assistants (Claude) were used to help draft the agent instructions, skill file,
setup documentation, and the initial generate-site.js script based on my requirements.
All code and configuration were reviewed, tested, and understood by me before use, and I can
explain the reasoning behind each design decision.
