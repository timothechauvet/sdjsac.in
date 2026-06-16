# AGENTS.md — sdjsac.in

Instructions for AI coding agents (Gemini, Claude, etc.) working on this project.

---

## 📐 Architecture

- **Framework:** Next.js (App Router) with `output: "export"` — **fully static, no backend**
- **Styling:** Vanilla CSS only (`app/globals.css`). No Tailwind, no CSS-in-JS.
- **Fonts:** Google Fonts (Epilogue, Inter)
- **Icons:** Lucide, simple icons and social brand assets via `react-icons`
- **Output:** Static HTML/CSS/JS generated in `/out`
- **Deployment:** Single multi-stage Dockerfile (node build → nginx serve on port 80)
- **Language:** Bilingual — Kannada (primary) + English (secondary)

### File structure

```
app/
├── globals.css      # Design system: tokens, typography, layout, components
├── layout.js        # Root <html>, metadata, font links
└── page.js          # All sections on a single page (nav, header, status, donate, donors, gallery, location, footer)
```

### Key constraints

- **No API routes.** No `app/api/` folder. No server components that fetch data.
- **No dynamic routes.** Single-page site.
- **No external JS libraries** beyond React/Next.js.
- **No Tailwind.** All styles live in `globals.css` using CSS custom properties.
- **Images are red box placeholders** — will be replaced later with real photos.

---

## 🧠 Behavioral Guidelines (Andrej Karpathy)

These guidelines reduce common LLM coding mistakes. Bias toward caution over speed.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

- State assumptions explicitly. If uncertain, ask.
- Present multiple interpretations — don't pick silently.
- Push back if a simpler approach exists.
- If unclear, stop and ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" that wasn't requested.
- If you write 200 lines and it could be 50, rewrite it.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

- Don't "improve" adjacent code or formatting.
- Match existing style.
- Remove orphans created by YOUR changes (imports/variables).
- Every changed line should trace directly to the request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

- Transform tasks into verifiable goals (e.g., "Write tests for X, then make them pass").
- For multi-step tasks, state a brief plan:
  1. [Step] → verify: [check]
  2. [Step] → verify: [check]
- After exporting the test results if needed, delete the file.
