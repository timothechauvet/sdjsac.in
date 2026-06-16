# ಸುಮೇರು ದಿಗಂಬರ ಜೈನ ಸಭಾ — sdjsac.in

Static website for **Sumeru Digambara Jain Sabha, Adagalale-Chandolli** — a fundraising and community information page for the construction of the 11-foot Bhagwan Shree 1008 Mallinath Tirthankara statue and surrounding temple complex.

> **URL:** [https://sdjsac.in](https://sdjsac.in)

---

## About

The site serves as a single-page informational portal with the following sections:

| Section | Purpose |
|---------|---------|
| **Header** | Bilingual (Kannada / English) title and project description |
| **Project Status** | Live status of statue installation, Sabha Bhavana, library, and Tyagi Nivas |
| **Inaugural Milestone** | Details of the Jinabimba Installation Ceremony |
| **Financial Remittance** | UPI QR, bank transfer details, PhonePe, and PayPal donation options |
| **Donor Board** | Lists of generous (> 1 Lakh) and regular donors |
| **Gallery** | Photo gallery with Instagram follow CTA |
| **Location** | Address and Google Maps link for Adagalale-Chandolli |
| **Contact / Footer** | Email, WhatsApp, Instagram, Facebook |

---

## Architecture

- **Framework:** Next.js (App Router) with static HTML export (`output: "export"`)
- **Styling:** Vanilla CSS (no Tailwind, no CSS-in-JS)
- **Fonts:** Google Fonts — Epilogue (display) + Inter (body)
- **Icons:** Lucide, simple icons and social brand assets via `react-icons`
- **Output:** Pure static HTML/CSS/JS in `/out` — no server, no API routes
- **Serving:** nginx (via Docker)

### File structure

```
sdjsac.in/
├── app/
│   ├── globals.css      # Design system (tokens, components, layout)
│   ├── layout.js        # Root layout with metadata + font imports
│   └── page.js          # Single-page homepage (all sections)
├── Dockerfile           # Multi-stage: node build → nginx serve
├── .dockerignore
├── next.config.mjs      # Static export config
├── package.json
├── AGENTS.md            # AI coding agent instructions
├── GEMINI.md            # → symlink to AGENTS.md
├── CLAUDE.md            # → symlink to AGENTS.md
└── README.md            # This file
```

---

## Running Locally

### Prerequisites

- Node.js ≥ 18
- npm

### Development server

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Static build (preview)

```bash
npm run build
npx serve out
```

This generates the static export in `./out` and serves it locally.

---

## Docker

### Build and run

```bash
docker build -t sdjsac .
docker run -p 8080:80 sdjsac
```

Open [http://localhost:8080](http://localhost:8080).

### One-liner

```bash
docker build -t sdjsac . && docker run --rm -p 8080:80 sdjsac
```

---

## License

All content © 2026 Sumeru Digambara Jain Sabha. All rights reserved.
