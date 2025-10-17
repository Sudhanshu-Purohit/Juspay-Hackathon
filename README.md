# Hackathon – Nested Menu Drawer (Next.js)

A responsive, accessible, and animated multi-level menu drawer for Next.js apps. Built with Tailwind CSS and Radix UI primitives, powered by Framer Motion for direction-aware transitions and Zustand for navigation history.

### Features
- ✅ Smooth, direction-aware slide animations between menu levels
- ✅ Intuitive back navigation with proper history management
- ✅ Full keyboard accessibility and screen reader support
- ✅ Clean, modern visual design with proper hover states
- ✅ Responsive layout that adapts to content
- ✅ Proper focus management and ARIA compliance

## Tech Stack
- **Framework**: Next.js 15, React 19
- **Styling**: Tailwind CSS v4, utility classes
- **UI Primitives**: Radix UI (drawer, etc.)
- **State Management**: Zustand
- **Animation**: Framer Motion
- **Icons**: lucide-react
- **Forms/Utils (available)**: React Hook Form, Zod, date-fns, etc.

## Getting Started

### Install
```bash
# with npm
npm install

# or pnpm
pnpm install

# or bun
bun install
```

### Develop
```bash
npm run dev
# or: pnpm dev / bun dev
```
Visit `http://localhost:3000`.

### Build & Start
```bash
npm run build
npm start
```

## Usage

The core component is `NestedMenuDrawer`, which renders a trigger and an animated, nested menu inside a Drawer.

```tsx
import NestedMenuDrawer from "@/components/menu-drawer";
import { menuData } from "@/mock/menu-data";
import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <NestedMenuDrawer
      triggerButton={<Button>Open Menu</Button>}
      data={menuData}
    />
  );
}
```

- **`triggerButton`**: Any React node that opens the drawer on click.
- **`data`**: Array of `MenuItem` objects (see Data Model).

### Data Model
```ts
type MenuItem = {
  label: string;
  description?: string;
  icon: LucideIcon;     // e.g. from lucide-react
  items?: MenuItem[];   // optional nested items
}
type MenuData = MenuItem[];
```

Example data lives at `src/mock/menu-data.ts`. Replace or extend as needed.

## Customization

- **Animations**
  - Controlled via `framer-motion` variants in `src/components/menu-drawer/index.tsx`.
  - Adjust `x` offsets and `transition.duration` to change slide distance/speed.
- **Styling**
  - Tailwind classes for layout, spacing, and hover: e.g., `hover:bg-secondary`, `rounded-sm`, `space-y-2`.
  - Modify classes in `src/components/menu-drawer/index.tsx` to fit your theme.
- **Icons**
  - Pass any `LucideIcon` (or swap to your own icon set by changing the `icon` type and usage).
- **State & Navigation**
  - The drawer state + history lives in a small Zustand store at `src/store/menu-drawer-store.ts`.
  - Exposed actions: `openDrawer()`, `closeDrawer()`, `goToMenu(submenu)`, `goBack()`.
- **Accessibility**
  - The drawer content includes `aria-label`, keyboard focusability, and labeled controls.
  - Back button has `aria-label="Go back"`.
  - Ensure your `triggerButton` is focusable and labeled.
  - Keep headings and text concise for screen readers.

## Accessibility & Keyboard Support

- Open/close via focusable trigger and Drawer behavior (Radix-based).
- Back navigation is a standard button with clear label and icon.
- Focus is maintained within the Drawer while open.
- Semantic roles/labels:
  - Drawer panel labeled via `aria-label="Multi-level drawer"`.
  - Back button uses `aria-label` and visible text.

## Project Structure (relevant parts)

- `src/components/menu-drawer/index.tsx`: Nested menu drawer component
- `src/store/menu-drawer-store.ts`: Zustand store for open state, active menu, and history
- `src/types/types.ts`: `MenuItem` and `MenuData` types
- `src/mock/menu-data.ts`: Example multi-level menu data
- `src/components/ui/*`: Reusable UI primitives (Drawer, Button, etc.)

## Scripts
- `dev`: Next dev with Turbopack
- `build`: Next build with Turbopack
- `start`: Start production server
- `lint`: Run ESLint

## Notes
- Replace `src/mock/menu-data.ts` with your own structure.
- You can render actions on leaf items (navigate, close drawer, etc.) by attaching click handlers where items have no `items`.