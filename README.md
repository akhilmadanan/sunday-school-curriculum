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

## Deploying to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site to
GitHub Pages whenever a commit is pushed to `main`. To enable it:

1. Push this project to the `main` branch on GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Open the **Actions** tab and wait for the **Deploy to GitHub Pages** workflow
   to complete.

The site will be available at
`https://akhilmadanan.github.io/sunday-school-curriculum/`. The Vite base path is
configured for this repository and is applied only in GitHub Actions builds.
