# Design System Specification: Dark Portfolio Signal

## 1. Overview & Creative North Star: "Midnight Signal"
This design system rejects bright, card-heavy SaaS portfolios. Our Creative North Star is **Midnight Signal**—a personal site that feels like a focused night workspace: deep navy ground, crisp white type, and a single pink accent that marks intent.

We move beyond generic dark themes by treating **contrast as hierarchy**. The page is one continuous navy plane (`#081229`); elevation comes from soft white washes (`white/5`–`white/15`), not stacked colored boxes. Typography leads. The pink accent (`#ec5990`) is scarce and deliberate—names, links, skill tags, and timeline rails—never decoration.

---

## 2. Color Theory & Tonal Depth
We use a restrained palette where Midnight Navy (`primary-bg` / `#081229`) is the authoritative ground, and Signal Pink (`primary` / `#ec5990`) is the high-intent accent. Body and secondary copy sit on Soft Mist (`text-secondary` / `#b8c5d1`) so white stays reserved for titles.

### The "Single Accent" Rule
**Explicit Instruction:** Designers are prohibited from introducing a second accent hue. All interactive emphasis—links, badges, timeline borders, skill chips—must derive from Signal Pink (`#ec5990`) and its hover/press variants (`#f06ba3`, `#e04a7f`).

### Surface Hierarchy & Nesting
Treat the UI as one deep canvas with faint frosted lifts—not a dashboard of cards.
- **Base Layer:** `primary-bg` (#081229)
- **Soft Lift:** `white/5` for project cards and tag wells
- **Hover Lift:** `white/10` for interactive cards
- **Hairline:** `white/15` or `border` for separators (header, footer, card edges)

### The "Wash" Rule
Accent backgrounds must be translucent pink washes (`rgba(236, 89, 144, 0.05–0.20)`), never solid pink fills—except for text and icons on navy. CTAs and links use flat pink text on transparent ground; hover lightens to `#f06ba3`.

*Signature Polish:* Brand highlights in hero copy (name, location) and section rails use flat `primary` (#ec5990) with white or mist text nearby—never purple gradients or glow stacks.

---

## 3. Typography: Clear Hierarchy
We use **Inter** as the sole family for display and body, loaded at weights 300–700. Character comes from scale and weight, not a second display face.

| Level | Token | Font | Size | Weight | Intent |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `hero-title` | Inter | 3rem / md 3.75rem | 700 | Hero greeting ("Hello there! I'm…"). |
| **Headline** | `section-title` | Inter | 1.875rem / md 1.5rem | 600 | Section titles (Projects, Skills, Contact). |
| **Title** | `project-title` | Inter | 1.25rem | 600 | Card and experience headings. |
| **Body** | `body-lg` | Inter | 1.125rem–1.25rem | 400 | Bio, descriptions, contact lead-in. |
| **Label** | `label-sm` | Inter | 0.75rem | 500 | Tags, badges, metadata. |

*Usage Note:* Always use `text-primary` / white for headings on navy. Secondary copy uses `text-secondary` (#b8c5d1). Accent words in hero use `#ec5990`. Body line-height stays ~1.6–1.7.

---

## 4. Elevation & Depth: Soft Lifts
We do not use heavy shadows to create "pop"; we use opacity lifts on navy.

*   **The Layering Principle:** Depth is a frosted sheet on midnight. Place a `white/5` card with `white/15` border on `primary-bg` for a quiet lift.
*   **Ambient Shadows:** Content panels (project detail pages) may use a soft dark shadow: `box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3)`. Keep it atmospheric, not glossy.
*   **The "Ghost Border" Rule:** Prefer `white/15` or `border` at low opacity. Timeline and education rails use a 2px Signal Pink border-left—not gray rules.
*   **Radius:** Default `--radius` is `0.5rem`. Cards use `rounded-lg`; large content panels may use `rounded-xl`. Skill chips may use `rounded-full`.

---

## 5. Component Architecture

### Links & Actions: Signal Pink
*   **Primary link:** Text `primary` (#ec5990). Hover: `#f06ba3` + underline. Active: `#e04a7f`.
*   **Nav link:** Text `text-secondary` (#b8c5d1). Hover: Signal Pink.
*   **Brand wordmark:** White; hover Signal Pink, no underline.

### Cards & Projects
*   **Project card:** `bg-white/5`, `border-white/15`, `rounded-lg`, padding `p-5` (~1.25rem). Hover: `bg-white/10`, `duration-300`.
*   **Badge:** Pink wash background (`#ec5990` / 20%) with pink text; small radius.
*   **Tags:** `white/5` well, mist text—not bordered chips in a second color.

### Experience & Education Rails
*   Left border: 2px `primary` (#ec5990).
*   Role/degree: white, semibold. Date/school: mist. Company: pink.

### Skill Chips
*   Background: pink wash (`#ec5990` / 20%). Text: `#ec5990`. Shape: `rounded-full`.

### Layout Shell
*   **Header:** Sticky, navy, bottom hairline `white/15`, `z-[1000]`, vertical padding `py-4`.
*   **Main:** Max width ~1200px; portfolio content `max-w-4xl`, centered, `py-8` (mobile `py-6`); horizontal padding from the shell (`px-4`).
*   **Sections:** Separate with `mb-12`, not colored bands. Section titles use `mb-6`.
*   **Cards / skills:** Project cards `p-5`, grid `gap-4`. Skill chips `px-3 py-1.5`, wrap `gap-2`.
*   **Footer:** Top hairline `white/15`, `py-6 mt-12`, mist meta text, pink links.
*   **Motion:** Page fade-in `0.5s ease-in` with slight `translateY(10px)`; hover transitions `200–300ms`.

---

## 6. Do’s and Don’ts

### Do:
*   **Keep the navy ground continuous.** Separate sections with spacing (`mb-12`), not colored bands.
*   **Spend pink sparingly.** Use it for names, links, rails, and status—not large fills.
*   **Prefer tokens.** Define colors in `:root` / `@theme inline` (`src/styles/globals.css`) before hardcoding hex in components.
*   **Use mist for secondary copy** (`#b8c5d1`) so white stays hierarchical.

### Don’t:
*   **Don't introduce a second accent** (purple, teal, gold). One signal color only.
*   **Don't use flat light gray backgrounds** on this site. Lifts are translucent white on navy.
*   **Don't default to Inter as "the brand story"** when adding marketing surfaces—if a future redesign needs a display face, introduce it deliberately in this doc first.
*   **Don't box everything in opaque borders.** Prefer opacity borders and pink rails for structure.
