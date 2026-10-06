# Akash Nandawana — Portfolio source

The latest Leadership Stories portfolio, exported on 6 October 2026.
Includes the revised section spacing, outcome cards, inline full journey and matching evidence panels.

## Upload to GitHub

1. Extract this ZIP on your computer.
2. Open your chosen GitHub repository and use **Add file > Upload files**.
3. Upload the extracted files and the entire `assets` folder. Keep `index.html` at the repository root, not inside an extra folder. Do not upload just the ZIP.
4. Enter a commit message and commit/propose the changes. If you use a new branch, merge it when ready.

This package contains source files only. It has not changed your GitHub repository, domain or hosting settings.

## Publish with GitHub Pages (optional)

For a repository you want to host with GitHub Pages:

1. Open **Settings > Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the branch containing these files (normally `main`) and **/(root)**.
4. Save. GitHub will display the website address when deployment completes.

If your existing repository already has a working deployment workflow, preserve that configuration and place the site files where that workflow expects them. This ZIP does not include or replace a GitHub Actions workflow or a custom-domain CNAME file.

## Main files

- `index.html`: current portfolio content, full journey and evidence templates.
- `stories.css`: current responsive layout, styling and interaction states.
- `stories.js`: impact stories, approach steps, journey, evidence panels and image gallery.
- `assets/`: original screenshots, images, CV and evidence portfolio PDF.
- `favicon.svg`: website icon.
- `.nojekyll`: static-site marker for GitHub Pages.
- `evidence.html` and other CSS/JS files: retained earlier evidence page and supporting source. The current homepage opens evidence within its own panels.

## Run locally

Open `index.html` in your browser. Alternatively, from this folder run:

```sh
python -m http.server 8000
```

Then open http://localhost:8000.

No npm install, build command, server application, database or API key is required. Google Fonts is loaded online; local system fonts are used if it is unavailable. Assets use relative paths, so they work on a GitHub Pages project URL.

## Editing

Change general text in `index.html`, story/approach content in `stories.js`, and presentation in `stories.css`. Keep asset filenames and their relative links consistent.

Screenshots and PDFs are included exactly as in the exported portfolio. Some project outputs are demonstration estimates, and prototype/identified-opportunity labels remain in place.

## Official GitHub instructions

- Upload files: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
