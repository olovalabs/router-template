# Olova Router Starter Template

A modern file-based routing starter template for **React 19** + **Vite** applications, powered by [Olova Router](https://www.npmjs.com/package/olova-router).

## Features

- ** File-Based Routing** - Create routes by adding folders and files
- ** Vite Powered** - Lightning-fast development and build times
- ** Type-Safe** - Full TypeScript support with auto-generated route types
- ** Dynamic Routes** - Support for dynamic parameters (`/users/:id`)
- ** Catch-All Routes** - Handle wildcard paths (`/blog/*`)
- ** Route Groups** - Organize routes without affecting URLs (`(auth)`)
- ** Search Params** - Built-in query parameter handling
- ** 404 Pages** - Custom not found page support

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. Clone or download this template
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── (auth)/              # Route group (doesn't affect URL)
│   ├── login/           # → /login
│   └── register/        # → /register
├── about/               # → /about
├── blog/
│   └── $/               # → /blog/* (catch-all)
├── search/              # → /search (with query params)
├── users/
│   ├── index.tsx        # → /users
│   └── $id/             # → /users/:id (dynamic)
├── assets/              # Static assets
├── 404.tsx              # Not found page
├── App.tsx              # Home page (/)
├── index.css            # Global styles
├── main.tsx             # App entry point
└── route.tree.ts        # Auto-generated routes (DO NOT EDIT)
```

## Available Scripts

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## Route Examples

| Path            | Type          | Description                    |
| --------------- | ------------- | ------------------------------ |
| `/`             | Static        | Home page                      |
| `/about`        | Static        | About page                     |
| `/users`        | Static        | Users list                     |
| `/users/:id`    | Dynamic       | Single user page               |
| `/blog/*`       | Catch-all     | Blog with wildcard paths       |
| `/login`        | Route Group   | Login page (in `(auth)` group) |
| `/search?q=...` | Search Params | Search with query parameters   |

## 🔧 Core Imports

```tsx
import {
  Link, // Type-safe navigation component
  OlovaRouter, // Router provider
  useRouter, // Navigation hook
  useParams, // Access route parameters
  useSearchParams, // Access query parameters
} from "@/route.tree";
```

## Adding New Routes

1. **Static Route**: Create a folder with `index.tsx`

   ```
   src/contact/index.tsx → /contact
   ```

2. **Dynamic Route**: Use `$` prefix for parameters

   ```
   src/products/$id/index.tsx → /products/:id
   ```

3. **Catch-All Route**: Use `$` folder for wildcards

   ```
   src/docs/$/index.tsx → /docs/*
   ```

4. **Route Group**: Use parentheses (won't affect URL)
   ```
   src/(dashboard)/settings/index.tsx → /settings
   ```

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool
- **TypeScript** - Type safety
- **Olova Router** - File-based routing
- **ESLint** - Code linting

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using [Olova Router](https://www.npmjs.com/package/olova-router)
