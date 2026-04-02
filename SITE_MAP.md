# Site Map — ishaanaggarwal.com
**Repo:** `github.com/drperplex0/ishaanaggarwal` | **Branch:** `main` | **Hosted via:** GitHub Pages

> This file is a reference for Claude. Read it at the start of any session before making changes.
> Update it whenever pages, images, or PDFs are added/removed/renamed.

---

## Folder Structure

```
ishaanaggarwal/
├── index.html                  ← Homepage
├── about.html                  ← About page
├── work.html                   ← Projects index (card grid)
├── writings.html               ← Blog/writings index (card grid)
├── readwise.html               ← Reading list
│
├── ambition.html               ← Article: "Ambition"
├── industry.html               ← Article: "Industriousness"
├── phys_txtbk.html             ← Article: "Physics Stack" (textbook recommendations)
│
├── valar_work.html             ← Project deep-dive: Valar Atomics / WardZero
├── heatsink_engine.html        ← Project deep-dive: 7kN Heat Sink Engine
├── ablative_engine.html        ← Project deep-dive: 3kN Ablative Engine
│
├── pdfviewer.html              ← Generic PDF viewer (receives ?pdf=&title=&desc= params)
│
├── index-template.html         ← Template: copy to create a new index-style page
├── subpage-template.html       ← Template: copy to create a new article/project page
├── pdf subpage template.html   ← Template: PDF listing page
│
├── css/
│   ├── global.css              ← Master stylesheet (used by ALL pages)
│   ├── mainpage.css            ← Legacy — mostly superseded by global.css
│   └── subpage.css             ← Additional styles for subpages
│
├── images/                     ← All images (see inventory below)
├── pdfs/                       ← All PDFs (see inventory below)
│
├── CNAME                       ← GitHub Pages custom domain
├── .gitattributes              ← Line ending normalization (LF)
└── .gitignore                  ← Excludes *.zip, .DS_Store, Thumbs.db
```

---

## Navigation (all pages share this nav)

| Label      | href            |
|------------|-----------------|
| Home       | index.html      |
| About      | about.html      |
| Read-list  | readwise.html   |
| Projects   | work.html       |
| Blog       | writings.html   |

Active link is marked with `class="active"` on the `<a>` tag.
"IA" initials in top-right always links back to `index.html`.

---

## Pages

### `index.html` — Homepage
- **Hero image:** `images/20220619_075904.jpg`
- **Hero text:** "This is Ishaan Aggarwal"
- **Tagline:** "This is a place for me to spread out my thoughts, projects, book recommendations, and pictures"
- **h2 gradient:** blue (`#00c8ff → #0048ff`), class `index-page`
- **Featured article cards (4):**
  | Card | Image | Links to |
  |------|-------|----------|
  | Ambition | `images/cutting ribbon.jpg` | `ambition.html` |
  | Valar Atomics: WardZero | `images/WardZero front.jpg` | `work.html` |
  | Physics Stack | `images/blackboard berkley.jpg` | `work.html` |
  | Transit Predictive Maintenance | `images/core barrel sheel.jpg` | `work.html` |

---

### `about.html` — About
- **h2:** "Ishaan's World" — gradient: gold/orange (`#FFD700 → #FF6347`), class `about-page`
- **Bio:** Delhi > Dubai > Vancouver > Los Angeles; Applied Physics @ SFU; now at Valar Atomics building nuclear reactors
- **Sections:** Daily Runners (In Pocket / On Desk / On Back / On Line — gear list, kept manually)

---

### `work.html` — Projects Index
- **h2:** "You Can Just Do Things" — gradient: pink/purple (`#FF69B4 → #8A2BE2`), class `work-page`
- **Project cards:**
  | Card | Image | Links to |
  |------|-------|----------|
  | Nuclear Reactor (Valar Atomics) | `images/WardZero front.jpg` | `valar_work.html` |
  | *(Nuclear Reactor Core — commented out)* | — | — |
  | Heat Sink Engine (7kN) | `images/Hotfire+SP24+Teaser.jpg` | `heatsink_engine.html` |
  | Ablative Engine (3kN) | `images/ablative engine mounted.jpg` | `ablative_engine.html` |
  | Optical Pumping Research | `images/laser lab img.jpg` | `pdfviewer.html?pdf=Optical_Pumping_Lab_Report.pdf&...` |
  | Electromagnetic Skin Depth | `images/oscilloscope img.jpg` | `pdfviewer.html?pdf=Skin_Depth_Lab_Report.pdf&...` |
  | Topological Crystalline Insulators | `images/TCI img.jpg` | `pdfviewer.html?pdf=TCI_Report.pdf&...` |
  | X-Ray Diffraction | `images/xray_diffraction_machine.jpg` | `pdfviewer.html?pdf=X_Ray_Diffraction.pdf&...` |
  | Hydrogen Embrittlement (NRC) | `images/NRC_lab_img.jpg` | `pdfviewer.html?pdf=NRC_Technical_Report.pdf&...` |

---

### `writings.html` — Blog
- **h2:** "Show, Don't Tell" — gradient: teal (`#40E0D0 → #0099d1`), class `blog-page`
- **Article cards:**
  | Card | Image | Links to |
  |------|-------|----------|
  | Ambition | `images/cutting ribbon.jpg` | `ambition.html` |
  | Transit Predictive Maintenance | `images/translink bus img.jpg` | `pdfviewer.html?pdf=translink_doc.pdf&...` |
  | Physics Stack | `images/blackboard berkley.jpg` | `phys_txtbk.html` |
  | Industriousness | `images/chevron refinery industry.jpg` | `industry.html` |

---

### `readwise.html` — Reading List
- **h2:** "Reading List" — gradient: purple/red (`#d340e0 → #d10000`), class `read-page`
- **Format:** unordered list of book titles
- **Books (current list):**
  - The Beginning of Infinity — David Deutsch
  - The Art of Doing Science and Engineering — Richard Hamming
  - Systems Medicine — Humbert Lagast
  - Huygens: The Man Behind the Principle — C.D. Andriesse
  - Thinking in Systems — Donella Meadows
  - The Structure of Scientific Revolution — Thomas Kuhn
  - Classical Physics — Blandford
  - Dealers of Lightning — Michael Hiltzik
  - Nanosystems — Eric Drexler
  - Pieces of the Action — Vannevar Bush
  - Principles — Ray Dalio
  - Ignition — John Clark
  - A Mind at Play — Jimmy Soni
  - I Am a Strange Loop — Douglas Hofstadter
  - Leviathan — Thomas Hobbes
  - Gödel Escher Bach — Douglas Hofstadter
  - Nonlinear Dynamics and Chaos — Steven Strogatz
  - Every Life is on Fire — Jeremy England
  - Code — Charles Petzold

---

### `ambition.html` — Article
- **Hero image:** `images/fall of icarus.jpg`
- **Hero text:** "Ambition"
- **Topic:** Essay on ambition

### `industry.html` — Article
- **Hero image:** `images/chevron refinery industry.jpg`
- **Hero text:** "Industriousness"
- **Topic:** Essay on industriousness / "The Quiet Force of the World"

### `phys_txtbk.html` — Article
- **Hero image:** `images/sfu_library.jpg`
- **Topic:** Physics textbook recommendations / "My Knowledge Stack of Physics"

---

### `valar_work.html` — Project: Valar Atomics / WardZero
- **Hero image:** `images/WardZero front.jpg`
- **Images used:** `images/WardZero front.jpg`, `images/graphite layer.jpg`, `images/graphite packed reactor.jpg`, `images/rpv hydrotest.jpg`, `images/rpv moving.jpg`, `images/core barrel sheel.jpg`

### `heatsink_engine.html` — Project: Heat Sink Engine
- **Hero image:** `images/Hotfire+SP24+Teaser.jpg`
- **Images used:** `images/lre gen 1.jpeg`, `images/lre gen 1_2.png`, `images/test stand 1.jpeg`, `images/test stand 2.png`, `images/test stand background.jpeg`

### `ablative_engine.html` — Project: Ablative Engine
- **Hero image:** `images/engine mount background.jpg`
- **Images used:** `images/ablative engine.png`, `images/engine mount .png`, `images/Hotfire+SP24+Teaser.jpg`, `images/ablative engine mounted.jpg`

---

### `pdfviewer.html` — Generic PDF Viewer
- **Usage:** Linked to via `?pdf=FILENAME.pdf&title=...&desc=...`
- **Note:** `FILENAME.pdf` is the bare filename (no `pdfs/` prefix) — viewer prepends `pdfs/` automatically
- **Hero image** is set dynamically from `pdfImageMap` based on PDF filename
- **PDF → image map:**
  | PDF param | Image shown |
  |-----------|-------------|
  | `Optical_Pumping_Lab_Report.pdf` | `images/laser lab img.jpg` |
  | `Skin_Depth_Lab_Report.pdf` | `images/oscilloscope img.jpg` |
  | `TCI_Report.pdf` | `images/TCI img.jpg` |
  | `X_Ray_Diffraction.pdf` | `images/xray_diffraction_machine.jpg` |
  | `NRC_Technical_Report.pdf` | `images/NRC_lab_img.jpg` |
  | `reactor_vessel.pdf` | `images/WardZero front.jpg` |
  | `reactor_core.pdf` | `images/core barrel sheel.jpg` |
  | *(fallback)* | `images/blackboard berkley.jpg` |

---

## Image Inventory (`images/`)

| File | Used in |
|------|---------|
| `20220619_075904.jpg` | index.html (hero) |
| `Ablative engine 2.png` | ablative_engine.html |
| `Hotfire+SP24+Teaser.jpg` | heatsink_engine.html, ablative_engine.html, subpage-template.html, index-template.html |
| `NRC_lab_img.jpg` | work.html, pdfviewer.html map |
| `TCI img.jpg` | work.html, pdfviewer.html map |
| `WardZero front.jpg` | index.html, work.html, valar_work.html, pdfviewer.html map |
| `ablative engine mounted.jpg` | work.html |
| `ablative engine.png` | ablative_engine.html |
| `blackboard berkley.jpg` | index.html, writings.html, pdfviewer.html (fallback) |
| `chevron refinery industry.jpg` | industry.html (hero) |
| `core barrel sheel.jpg` | index.html, work.html, valar_work.html, pdfviewer.html map |
| `cutting ribbon.jpg` | index.html, writings.html, pdf subpage template.html |
| `engine mount .png` | ablative_engine.html |
| `engine mount background.jpg` | ablative_engine.html (hero) |
| `fall of icarus.jpg` | ambition.html (hero) |
| `fuel_loading.jpg` | *(available, not currently used in nav pages)* |
| `graphite layer.jpg` | valar_work.html |
| `graphite packed reactor.jpg` | valar_work.html |
| `images.jpg` | *(available, not currently used in nav pages)* |
| `ishaan_agganwal_03.jpg` | *(available — intended for about.html)* |
| `laser lab img.jpg` | work.html, pdfviewer.html map |
| `lre gen 1.jpeg` | heatsink_engine.html |
| `lre gen 1_2.png` | heatsink_engine.html, work.html |
| `oscilloscope img.jpg` | work.html, pdfviewer.html map |
| `pintle injector.jpg` | *(available, not currently used in nav pages)* |
| `rpv hydrotest.jpg` | valar_work.html |
| `rpv moving.jpg` | valar_work.html |
| `sfu_library.jpg` | phys_txtbk.html (hero) |
| `test stand 1.jpeg` | heatsink_engine.html |
| `test stand 2.png` | heatsink_engine.html |
| `test stand background.jpeg` | heatsink_engine.html |
| `translink bus img.jpg` | writings.html |
| `xray_diffraction_machine.jpg` | work.html, pdfviewer.html map |

---

## PDF Inventory (`pdfs/`)

| File | Linked from | pdfviewer param |
|------|-------------|-----------------|
| `Chaotic_Circuit.pdf` | writings.html | `Chaotic_Circuit.pdf` |
| `NRC_Technical_Report.pdf` | work.html | `NRC_Technical_Report.pdf` |
| `Optical_Pumping_Lab_Report.pdf` | work.html | `Optical_Pumping_Lab_Report.pdf` |
| `Skin_Depth_Lab_Report.pdf` | work.html | `Skin_Depth_Lab_Report.pdf` |
| `TCI_Report.pdf` | work.html | `TCI_Report.pdf` |
| `X_Ray_Diffraction.pdf` | work.html | `X_Ray_Diffraction.pdf` |
| `_Pb_Sn_In_Te_Report.pdf` | writings.html | `_Pb_Sn_In_Te_Report.pdf` |
| `translink_doc.pdf` | writings.html | `translink_doc.pdf` |

---

## CSS Architecture

All pages load `css/global.css`. Page-specific h2 gradient colors are set via CSS variables by adding a class to a wrapper div:

| Class on wrapper div | Page | h2 gradient |
|---------------------|------|-------------|
| `index-page` | Homepage | `#00c8ff → #0048ff` (blue) |
| `about-page` | About | `#FFD700 → #FF6347` (gold/orange) |
| `work-page` | Projects + subpages | `#FF69B4 → #8A2BE2` (pink/purple) |
| `blog-page` | Blog | `#40E0D0 → #0099d1` (teal) |
| `read-page` | Read-list | `#d340e0 → #d10000` (purple/red) |

---

## Workflow Notes (for Claude)

**Before making any change:**
1. Read this file (SITE_MAP.md)
2. Read the specific HTML file(s) being changed
3. If adding a new image, add it to `images/` and update the Image Inventory above
4. If adding a new PDF, add it to `pdfs/`, update the PDF Inventory above, and add an entry to `pdfviewer.html`'s `pdfImageMap`

**Commit message format:** `[scope]: description`
- Examples: `index: update hero image`, `work: add new project card`, `about: update bio`, `css: adjust mobile nav padding`, `readwise: add 3 books`

**Push policy:** Always ask Ishaan for approval before pushing.

**Templates:**
- New article/blog post → copy `subpage-template.html`, rename, add card to `writings.html`
- New project page → copy `subpage-template.html`, rename, add card to `work.html`
- New PDF listing page → copy `pdf subpage template.html`
