---
name: portfolio-copy
description: Use when drafting bio, about-section, or project-blurb copy for a portfolio site from resume/GitHub data. Load before writing any user-facing portfolio text.
---

# Portfolio Copy

Rules for turning resume bullet points and repo data into copy a human would
actually want to read, and guidance for making the resulting site look
considered rather than default.

## Tone
- Short sentences. If a sentence needs a comma to hold two ideas, it's
  probably two sentences.
- Active voice, first person for bios ("I build Android apps," not "Android
  apps are built by...").
- No buzzwords: ban "passionate," "leverage," "synergy," "dynamic," "results-
  driven," "detail-oriented" unless followed immediately by a concrete
  example that proves it.
- Specific beats impressive-sounding. "Cut query time by 98% using indexed
  joins" beats "optimized backend performance."

## Bio (1 line)
Format: [role/identity] who [does specific thing]. Example shape:
"Android developer who ships offline-first apps for people with patchy
internet." Not: "Passionate software engineer with expertise in mobile
development."

## About section (2-3 sentences)
- Sentence 1: what they do and for whom.
- Sentence 2: one concrete proof point (a shipped project, a measurable
  result, a specific stack).
- Sentence 3 (optional): what they're working on now or looking for.

## Project blurbs (1-2 sentences each)
- What it does, in plain terms a non-technical reader could follow.
- One technical detail that shows depth (the stack, the hard part solved,
  the scale).
- Skip generic framing like "This project showcases my skills in..."

## Privacy and personal details
- Never include a phone number on the generated site, even if it appears in
  the resume. Email is fine to include if the user provides one, but phone
  numbers should be left out entirely.
- Do not state the exact duration (in months or years) of any internship or
  short-term role. Describe the role and what was done there without
  specifying "X months" or "X years" — e.g. "Android Developer Intern at
  MindMatrix, focused on GenAI features" rather than "Android Developer
  Intern (9 months) at MindMatrix." If a duration must be shown at all, use
  only start/end month-year (e.g. "Feb–May 2026") rather than a spelled-out
  length, and only if the user explicitly asks for dates to be shown.

## When resume and GitHub data conflict
Don't quietly favor one. Prefer what the GitHub research subagent verified
over unverified resume claims, but before treating something as a
contradiction, check whether it might just be a classification gap — e.g. a
GitHub repo tagged by its dominant language (like "Java") can still be an
Android project if it uses Kotlin/Compose alongside Java, or was
misclassified by file extension alone. Read the README before concluding a
claim is unverified. If it's a genuine gap, note it to the user in chat
rather than baking an unverified claim into the site copy.

## Visual design guidance for the generated site
A portfolio site should look like it was designed, not like a default
template. When generating the page:
- Use a real type scale: a clearly larger, bolder heading for the name, a
  distinct accent-colored subtitle for the role, and comfortable line-height
  (1.6-1.7) for body text.
- Pick one accent color and use it consistently for links, tags, and
  highlights — don't scatter multiple unrelated colors.
- Give project cards visual weight: a subtle border, rounded corners,
  breathing room (padding) inside, and a hover state (slight lift, border
  color change, or shadow) so the page feels interactive, not static.
- Use consistent spacing between sections (generous, not cramped) so the
  page doesn't feel like a wall of text.
- Prefer a small number of skill tags per row with wrapping over a long
  unbroken list.
- Keep the overall page width constrained (readable line length) rather
  than stretching content edge-to-edge on wide screens.
