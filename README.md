# Sunday School Curriculum

A React application for Sunday school curriculum planning, built with Vite, TypeScript, Material UI, and Tailwind CSS.

## Getting started

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` type-checks the project and creates a production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` checks the source with Oxlint.

## UI

The app uses [Material UI](https://mui.com/) for accessible React components and
Tailwind CSS for utility-first layout and styling. Material UI styles are placed
in the `mui` CSS layer, before Tailwind's `utilities` layer, so utility classes
can take precedence when both apply.
