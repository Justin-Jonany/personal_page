# Personal Website

This whole repo was vibe coded.

## Requirements
- Node.js 18.17+ or 20+
- npm (bundled with Node.js)

## Local Development
```bash
npm install
npm run dev
```
Then open http://localhost:3000 in your browser.

## Production Build
```bash
npm run build
npm run start
```
The build output lives in `.next/`. Run `npm run lint` anytime you want to check for common issues.

## Tea Ritual Data Model
- `lib/data/tea-data.ts` keeps the curated list of 50 teas with both Western and Gongfu profiles (time / temp / ratio) plus tasting notes.
- `lib/db/tea-db.ts` exposes a tiny in-memory database wrapper so the rest of the app does not import raw data directly.
- `app/api/teas/route.ts` is a stateless API endpoint that streams the catalog to the client and can be extended later if you add filters or persistence.

Add or edit teas by updating the data file—no other code changes are required unless you add new brew methods.
