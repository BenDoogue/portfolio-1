# Portfolio 1 — Retro Web Edition

A static, legacy/retro-styled portfolio hosted on GitHub Pages for **Ben Doogue** (`@BenDoogue`), linking to **StudyDesk**, **DoorList**, and other GitHub projects.

## Adding or Editing Projects

No build step or frameworks are required. Everything is configured in **`projects.js`**:

1. Open `projects.js` (you can edit it directly in GitHub's web editor).
2. Scroll to the `projects` array.
3. Copy the commented-out template at the bottom of `projects`, uncomment it, and fill in:
   - `title`: Project name
   - `type`: `"page"` (if it has a live site/GitHub Page) or `"repo"` (if code only)
   - `year`: Year created
   - `liveUrl`: Live URL (or `null`)
   - `repoUrl`: GitHub repository URL
   - `desc`: Short description
   - `tags`: List of short tags
4. Commit the change to `main` — GitHub Pages will automatically rebuild in ~30 seconds.

## Files

- `index.html` — Page structure
- `style.css` — Retro 90s desktop/hypertext styling
- `projects.js` — **Edit this file** to update your bio or projects
- `app.js` — Renders the data from `projects.js`
