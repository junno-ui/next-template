# Clario

Clario is a free premium SaaS landing page template from Junno UI. It is built
with Next.js, shadcn/ui, Tailwind CSS, dark and light themes, animated marketing
sections, pricing, FAQ, testimonials, newsletter capture, and a polished product
dashboard preview.

Template page: https://junno-ui.com/template/clario-landing-page

## Stack

- Next.js 16 with the App Router
- React 19
- Tailwind CSS 4
- shadcn/ui components
- Radix UI primitives
- Iconify icons
- Framer Motion animations
- next-themes for theme switching

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Useful Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run format
```

## Customize The Template

1. Update the brand, links, and navigation in `config/site.ts`.
2. Edit global theme tokens and background utilities in `app/globals.css`.
3. Customize the landing sections inside `components/marketing`.
4. Replace demo pricing, testimonials, FAQ, and dashboard metrics with your real product content.
5. Update metadata in `app/layout.tsx` before production.

## Project Structure

```text
app/                         App Router pages, layout, metadata, global CSS
components/layout/           Header, footer, brand, auth popover
components/marketing/        Landing page sections
components/theme/            Theme provider and visual customizer
components/ui/               shadcn/ui primitives
config/                      Site and theme configuration
content/                     Blog/demo content
lib/                         Shared utilities
```

## Notes

The top banner intentionally states that Clario is a free Junno UI template and
links back to the official Clario template page. You can remove or adjust it in
`components/layout/site-header.tsx` if you are adapting this for a production
brand.
