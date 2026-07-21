# Oltre i Tre Veli — Site brief (single source of truth)

Handoff doc for future development. This file consolidates the original design brief, the hub restructuring prompt, and the current live architecture.

**Visual reference (mandatory):** [`images/exampleDesign.jpg`](images/exampleDesign.jpg) — mood, colors, typography, copy tone. Not a layout to copy blindly.

**Architecture note:** The original brief described one long landing. The site is now a **hub + 3 landings** (link-in-bio pattern inspired by [davidvalmori.com](https://www.davidvalmori.com/)). Design principles, copy, palette, WhatsApp rules, and image rules still apply — redistributed across pages.

---

## Brand & conversion goals

| | |
|---|---|
| **Name** | Oltre i Tre Veli |
| **Description** | Scuola di Tarocchi |
| **Experience** | Premium — not a generic website; designed to capture attention, convey mystery & authority, deepen desire, collect leads, push toward product purchase |
| **Conversion** | WhatsApp only (no email backend). Number: `393520942078` (= +39 352 094 2078) → `https://wa.me/393520942078` |

### Target audience

- Market: **Italian**
- Interests: esoterismo, spiritualità, crescita personale, tarocchi, simbolismo, astrologia, archetipi, percorsi interiori, psicologia junghiana, Cabala
- Age: ~25–55

### Tone of voice

Evocativo, misterioso, elegante, rassicurante, interiore (ascolto, archetipi, risveglio — not fortune-telling).

Avoid: miracle promises, sensationalism, aggressive language, “cartomante da fiera” tone. No Lorem Ipsum. Prefer copy faithful to `images/exampleDesign.jpg` where it fits.

Tagline spirit: *I Tarocchi non predicono il futuro. Ti aiutano a ricordare chi sei.*

---

## Architecture (current)

```
index.html          Hub (link-in-bio)
pages/
├── consulenza.html Private tarot consults + testimonials
├── scuola.html     School benefits + lead form
└── guida.html      Free guide request
styles.css          Shared design system (root)
whatsapp-form.js    Lead form + guida CTA → prefilled WhatsApp (root)
images/             All photos + design reference
└── testimonianze/  Review avatars
```

Hub pattern: compact portrait + brand + stacked destination links, night/gold aesthetic. Each subpage has `.back-link` → `../index.html`. From `pages/`, assets use `../styles.css`, `../whatsapp-form.js`, `../images/…`.

Restructuring intent (from original prompt): same principles as the single landing; split content into consultancy / school / free guide; hub like Valmori link-in-bio.

---

## Tech constraints (hard)

- Static HTML5, semantic, accessible, responsive, ordered, easy to edit
- Mobile-first; primary target iPhone-class; also tablet/desktop
- Content max width ~900–1100px (hub ~520px). Sections ~full viewport height where it fits; no huge empty voids; CTAs always visible
- Bootstrap 5 **or** PicoCSS via CDN — project uses **Bootstrap 5** + Bootstrap Icons
- Custom CSS in [`styles.css`](styles.css) (tokens + components)
- **One** local JS file only: [`whatsapp-form.js`](whatsapp-form.js) — vanilla IIFE, no jQuery/React/other libs. From root: `<script src="whatsapp-form.js" defer></script>`; from `pages/`: `src="../whatsapp-form.js"`.
- No extra inline JS except WhatsApp-related necessity
- Images: **local files only** — no Unsplash/Pexels/remote stock/generated placeholders; no invented paths
- Simple CTAs: `target="_blank"` `rel="noopener noreferrer"`; do **not** use internal `#` anchors as primary CTAs
- Footer: **no** Privacy or Contatti links

---

## Design system

### Atmosphere to evoke

Night, constellations, tarot, candles, antique gold/bronze, esoteric symbols (moon, star, eye, tree of life), soft candlelight, delicate sacred geometry (subtle mandalas, not invasive).

Style keywords: minimal, elegant, premium, cinematic, mysterious, mystical, clean, artisanal (not generic template). Should feel like premium info-product / Masterclass / spiritual school funnels — **not** default Bootstrap.

Section rhythm: dark (black/charcoal + light text) ↔ cream/parchment (+ dark text + gold details).

### Palette (align to images/exampleDesign.jpg — gold on black/cream, NOT purple theme)

| Token | Value | Use |
|-------|-------|-----|
| Night | `#0B0A09` (or `#000000`) | Main dark bg |
| Night alt | `#161311` | Secondary dark |
| Cream | `#F7F2EA` / `#F9F6F1` | Light sections |
| Text on dark | `#F3EFE8` | |
| Text on light | `#1A1714` | |
| Muted on dark | `#A39B90` | |
| Muted on light | `#5C554C` | |
| Gold | `#C4A574` | CTA fills, icons, borders |
| Gold light | `#E6D3A3` | Highlights, `.hero-sub` |
| Gold dark | `#2A2118` | Text on gold CTAs |
| Gold border | `rgba(196, 165, 116, 0.45)` | Thin borders |
| Border dark | `#2A261F` | Borders on dark sections |

**Purple is not the CTA color.** CTAs = full gold with dark text. Purple only as very discreet ambient tint if ever used — never as button.

### Typography

Hierarchy (message clear in &lt;3 seconds): Headline → Subtitle → Explanation → CTA. Headlines large; secondary text much smaller. Max ~3–4 consecutive body lines. Short headlines. Phone-readable blocks.

Fonts (Google Fonts CDN):

- Headlines: serif (project: **Cormorant Garamond**; alternatives Playfair Display / Cinzel)
- Body: clean sans (project: **Outfit**; alternatives Manrope / DM Sans)
- Script accent only for labels like “Risorsa gratuita” (**Great Vibes**) — minimal use

Do **not** use Inter, Roboto, Arial, or system-ui as primary. No fantasy/fraktur fonts.

- Cream sections: dark headlines
- Dark sections: white headlines, gold subtitles

#### `.hero-sub` rules (mandatory when used)

- Text: `attraverso i Tarocchi`
- Larger/more prominent than lead: ~`clamp(1.85rem, 5.8vw, 2.75rem)`
- Color: `#E6D3A3` (`--gold-light`), **not** medium gold `#C4A574`
- Weight 500, italic serif
- Soft gold text-shadow (candle glow, not neon)
- Letter-spacing ~`0.02em`

### Graphic components — use

- Moderately rounded cards (not excessive)
- Soft deep shadows on dark sections
- Thin luminous gold borders
- Bootstrap Icons (stars, moon, eye, check) in gold
- Light candle-glow effects (never neon)
- Full gold CTAs
- Gold details & thin dividers
- On cream: thin gold frame with light corner ornaments (simple CSS; no heavy decorative images)

### Graphic components — avoid

- Excessive/rainbow gradients
- Animations
- Kitsch (blinking stars, glitter, crystal clipart)
- Fantasy fonts
- Purple CTAs as dominant element
- “Bootstrap default” look

### CSS components in `styles.css`

`.btn-gold`, `.badge-gold`, `.label-script`, `.img-premium`, `.ornate-frame`, `.hub-*`, `.hero-*`, `.benefits`, `.lead-form-card`, `.testimonials-track`, `.site-footer`, `.back-link`, `.consult-strip`, `.page-intro`, `.bonus-top`, `.bonus-bottom`

---

## UX guidelines

Each screen/section communicates **one idea**. CTAs always immediately recognizable (full gold).

Funnel rhythm: Attract → Engage → Curiosity → Reduce objections → Call to action.

Breathing room without large empty voids. Maintain AA contrast where possible across light/dark sections.

---

## WhatsApp conversion (`whatsapp-form.js`)

Edit **number and messages only in this file**. Vanilla IIFE, no dependencies. Handles both lead form and free-guide CTA (different messages).

| Trigger | Behavior |
|---------|----------|
| Simple CTAs (consult, school, hub WA) | Bare `https://wa.me/393520942078` |
| `#lead-form` submit | `preventDefault` → `reportValidity` → open WA with prefilled multiline lead message (`?text=` + `encodeURIComponent`) |
| `#cta-guida-gratuita` / `.js-cta-guida` | On load, set `href` to `wa.me/…?text=` encoded guide request — **must** include `?text=`, never bare wa.me for these CTAs |

Form fields: `name="nome"` / `cognome` / `email`. Form must **not** GET to wa.me. User still presses Send in WhatsApp — text is only prefilled.

Default guide message:

```text
ciao Luna, vorrei avere la guida gratuita sui tarocchi marsigliesi
```

Default lead message:

```text
Ciao, vorrei iniziare il percorso con Oltre i Tre Veli.

Nome: …
Cognome: …
Email: …
```

Guide section copy/CTA must use **“richiedi”**, never **“scarica”**.

---

## Images (local only)

All media lives under **`images/`** (testimonials in `images/testimonianze/`). HTML paths are relative from the site root, e.g. `images/photoTurbante.jpg`.

### Available files

| File | Description / use |
|------|-------------------|
| `images/photoTurbante.jpg` | Warm presence / turban portrait — hub avatar + consulenza hero. Client choice for main portrait. **Do not** use Treccine/Seduta in hero slot |
| `images/photoSeduta.jpg` | Consult session — consulenza strip |
| `images/photoTreccine.jpg` | Portrait — available asset (not currently used on a page) |
| `images/photoScale.jpg` | Staircase / celestial portal (from exampleDesign) — scuola mystic visual |
| `images/photoBook.jpg` | Esoteric book / La Luna / moth emblem / crystal — guida only visual |
| `images/photoTarocchi.jpg` | Tarot still — scuola form support |
| `images/exampleDesign.jpg` | Design reference only (not embedded in pages) |
| `images/testimonianze/matteo.jpg` | Review Matteo |
| `images/testimonianze/sara.jpg` | Review Sara |
| `images/testimonianze/davide.jpg` | Review Davide Pacal |
| `images/testimonianze/alessia.jpg` | Review Alessia |

### Rules

- Relative paths exactly as filenames above
- One photo per slot — no collage, inset, or two photos in the same block
- At least **2 of 3** portraits (`photoSeduta` / `photoTreccine` / `photoTurbante`) across the site when using portrait slots. Current live pages use `photoTurbante` + `photoSeduta`; scuola support slot uses `photoTarocchi` instead of a third portrait.
- Treatment: `object-fit: cover`; thin gold border or very light glow; no heavy frames; on mobile keep height contained so text isn’t crushed
- Optional gold SVG halo/mandala behind portraits (graphics only — not a second photo)
- Testimonials: real photos required — no initial-only avatars when files exist

### Historical section assignment (still the content map)

1. **Hero / consulenza:** `images/photoTurbante.jpg` (+ optional halo)
2. **Benefici / scuola:** `images/photoScale.jpg` + separate slot (`images/photoTarocchi.jpg` beside form)
3. **Bonus / guida:** `images/photoBook.jpg` alone in that block

---

## Canonical copy & CTAs

### Hub (`index.html`)

- Brand: Oltre i Tre Veli
- Tagline: Scuola di Tarocchi · Ascolto interiore
- Links: Consulenze private → `pages/consulenza.html` · Scuola → `pages/scuola.html` · Guida gratuita (kicker “Risorsa gratuita”) → `pages/guida.html`
- Secondary: Contattami su WhatsApp → bare wa.me

**Hub visual feedback (locked):**
- Smaller secondary text (link subs, WhatsApp line) uses **luminous gold** `#E6D3A3` (`--gold-light`), not muted beige `#A39B90`
- Hub type sizes are **larger** overall (brand, tagline, link titles/subs)
- Link card + avatar borders: **~2px**, always luminous gold (`--gold-light`), not the faint `gold-border` rgba
- Avatar larger (~188px) with `object-position: center 18%` so the head is not cropped too tightly

### Consulenza — hero

- Badge: Consulenze private con i tarocchi (`.badge-gold`). Original single-page had **two** badges (Scuola + Consulenze); on this page use the consultancy badge. Do **not** use “Scuola Esoterica” or “Risorsa gratuita” as hero badges.
- Headline: **Inizia ad ascoltarti davvero**
- Sub: **attraverso i Tarocchi** (`.hero-sub` rules above)
- Lead:

  > Un viaggio di trasformazione interiore tra simboli, archetipi e saggezza antica.  
  > I Tarocchi non predicono il futuro. Ti aiutano a ricordare chi sei.

- Benefit card (both blocks required):

  1. **I Tarocchi come linguaggio dell’anima.** Un ascolto interiore guidato da simboli, non da promesse facili.
  2. Uno spazio dedicato ad ascoltare ciò che i Tarocchi hanno da rivelare, per fare chiarezza, comprendere i tuoi schemi interiori e affrontare con maggiore consapevolezza il tuo percorso di vita.

- CTA: **PRENOTA IL TUO CONSULTO** → WhatsApp. Do **not** use “INIZIA IL TUO VIAGGIO” as hero CTA.
- Micro-benefits (max 3): Percorsi trasformativi · Supporto e community · Crescita personale
- Strip: “Come avviene il consulto” + `images/photoSeduta.jpg`

### Scuola

- Badge: Scuola di Tarocchi
- Intermediate CTA: **ENTRA NELLA SCUOLA** → WhatsApp (centered band; does not fill the whole viewport)
- Do **not** include “ENTRA ANCHE TU NELLA NOSTRA COMMUNITY” (or a second intermediate CTA between benefits and guide)
- Title: **Oltre i Tre Veli è molto più di una scuola di Tarocchi.**
- Intro:

  > È un percorso di risveglio dell’anima, un cammino iniziatico che unisce la psicologia junghiana, la Cabala e i Tarocchi per guidarti oltre le illusioni, verso la verità più profonda: **TE STESSA**.

- Benefits (max 5, **this order**, gold check icons):

  1. **I TAROCCHI** — Uno strumento sacro per esplorare il tuo mondo interiore.
  2. **PSICOLOGIA JUNGHIANA** — Per comprendere i tuoi archetipi e integrare le tue ombre.
  3. **CABALA** — La chiave per comprendere la struttura dell’universo, il senso della nostra esistenza e il viaggio dell’anima attraverso i Tarocchi.
  4. **TRASFORMAZIONE** — Un viaggio che ti insegna ad ascoltarti davvero e manifestare la tua luce nel mondo.
  5. **UN PERCORSO PER OGNI ANIMA** — Adatto a principianti, appassionati e a chiunque senta il richiamo di un viaggio di conoscenza interiore e di studiare in modo diverso i tarocchi.

- Form card beside benefits: Nome, Cognome, Email, button **INIZIA IL TUO VIAGGIO** (or “Ricevi l’accesso”) → `#lead-form` + JS. Mobile: benefits above, form below. Desktop: two columns.

### Guida

- Label (script): **Risorsa gratuita**
- Title: **Per iniziare il tuo viaggio** / PER INIZIARE IL TUO VIAGGIO
- Description: Richiedi la guida gratuita per iniziare a entrare in contatto con i Tarocchi e con il tuo mondo interiore.
- Button: **RICHIEDI LA GUIDA GRATUITA** (or “Richiedi il materiale gratuito”) — id `cta-guida-gratuita` (extra repeats use class `js-cta-guida`)
- Visual: `images/photoBook.jpg` only in the hero block

#### Extra sections on `pages/guida.html` (after hero)

1. **Cosa troverai nella guida** (cream / ornate) — intro + bullets:
   - Perché i Tarocchi sono uno strumento di conoscenza di sé e non soltanto di divinazione.
   - Il significato degli archetipi e il loro legame con la tua vita.
   - Come iniziare a leggere i simboli anche se parti da zero.
   - Un primo esercizio pratico per sviluppare ascolto e intuizione.
   - Le basi per iniziare il tuo viaggio attraverso i Tarocchi.
2. **Non è un semplice ebook** (night) — symbolism + psychology + personal growth; Arcani as mirror.
3. **E questo è solo l’inizio…** (cream) — bridge to Scuola (`scuola.html`) + repeat guide CTA + “SCOPRI LA SCUOLA”.

Intro copy for section 1: *Questa guida è pensata per accompagnarti nei tuoi primi passi…* then *Al suo interno scoprirai:* before the list.

### Testimonials (consulenza) — exact texts, fixed order

Section title **must** be: **Un’esperienza inaspettata** (subtitle optional: “Dicono di noi”). Do **not** use “Una community che trasforma”.

CSS-only horizontal slider (`overflow-x` + `scroll-snap`). Each card: local avatar, name, IG handle+icon, ★★★★★, exact quote. IG links: `target="_blank"` `rel="noopener noreferrer"`. Do **not** invent reviews.

1. **Matteo** — `images/testimonianze/matteo.jpg` — [@fallalibera](https://www.instagram.com/fallalibera?igsh=NGwweDhvZDZzd2t6)  
   *Ero molto scettico nei confronti della cartomanzia, ma grazie a Luna ho scoperto che non si tratta di qualcosa da ciarlatani, bensì di un potente strumento di conoscenza psicologica e spirituale.*

2. **Sara** — `images/testimonianze/sara.jpg` — [@viviti_arrenditiallavita](https://www.instagram.com/viviti_arrenditiallavita?igsh=MXh1MXZ4bzk3ZDY0dA==)  
   *Farmi leggere i tarocchi da Luna mi ha aiutato in modo pratico. Perchè dopo aver individuato il problema, mi ha subito detto come risolverlo*

3. **Davide Pacal** — `images/testimonianze/davide.jpg` — [@datti.valore.ora](https://www.instagram.com/datti.valore.ora?igsh=OThnbmhnbXlheHU1)  
   *Luna ha la capacità di mettere chiunque a proprio agio. Mi sono sentito libero di parlarle anche di questioni importanti e molto intime, senza mai sentirmi giudicato.*

4. **Alessia** — `images/testimonianze/alessia.jpg` — [@alessia_papetti](https://www.instagram.com/alessia_papetti?igsh=MXFsOGxzcWU5cTZzcA==)  
   *Grazie a Luna sono riuscita a fare chiarezza su situazioni che non riuscivo a comprendere e, soprattutto, a capire quale insegnamento potevo trarre da ciò che stavo vivendo.*

### Footer (all pages)

- Brand: **OLTRE I TRE VELI – SCUOLA DI TAROCCHI**
- Copyright: **© 2024 Oltre i Tre Veli – Scuola di Tarocchi. Tutti i diritti riservati.**
- Dark bg, light text, thin gold separator line. No Privacy / Contatti.

---

## Page inventory (what lives where)

### `index.html` — Hub

Circular `images/photoTurbante.jpg` + halo · brand · tagline · 3 stacked links · WhatsApp text link · footer.

### `pages/consulenza.html`

Hero (portrait, copy, benefit card, PRENOTA, micro-benefits) · consult strip + `photoSeduta` · testimonials · footer.

### `pages/scuola.html`

Intro + Scuola badge · ENTRA NELLA SCUOLA · benefits + `photoScale` + form + `photoTarocchi` · footer · `../whatsapp-form.js`.

### `pages/guida.html`

Hero (risorsa gratuita + richiedi + `photoBook`) · **Cosa troverai** (5 bullets) · **Non è un semplice ebook** · **E questo è solo l’inizio…** (link scuola + CTAs) · footer · `../whatsapp-form.js`.

---

## How to extend safely

1. Keep conversion on WhatsApp; new message templates only in `whatsapp-form.js`.
2. Reuse tokens/classes in `styles.css`; no purple CTA themes; no Inter/Roboto/Arial as primary.
3. New pages: put under `pages/`; link from hub as `pages/….html`; include `.back-link` to `../index.html`; use `../` for CSS/JS/images; match night/cream rhythm; one idea per section.
4. Italian copy consistent with tone above; keep fixed testimonials/benefits wording unless client changes them.
5. No Privacy/Contatti footer unless client requests.
6. Prefer editing existing HTML/CSS over new frameworks. No extra JS libraries.
7. Respect image slot rules (one photo per block; local files only).

---

## Quick start

Open `index.html` in a browser (or any static file server). No build step.

| Change… | Edit… |
|---------|--------|
| Look / layout tokens | `styles.css` |
| Page content | relevant `.html` |
| WA number / prefilled messages | `whatsapp-form.js` |
| Mood reference | `images/exampleDesign.jpg` |
