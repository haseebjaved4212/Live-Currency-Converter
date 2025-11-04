# Live Currency Converter

A small React + Vite project that converts amounts between currencies using a public exchange rates API.

This repository contains a lightweight single-page app (SPA) that:

- Lets a user enter an amount, pick a "from" currency and a "to" currency
- Fetches exchange rates from a public API and shows the converted amount
- Is built with React and Vite and styled using Tailwind-like utility classes (project includes a minimal style setup)

---

## Demo / How it works

1. Enter an amount in the input field.
2. Choose the source currency (From) and the target currency (To).
3. The app fetches the latest exchange rates for the source currency and displays the converted amount.

The app uses the public endpoint at `https://api.exchangerate-api.com/v4/latest/{CURRENCY}` to fetch a map of exchange rates relative to the chosen base currency.

Note: This project is intended as a small demo/learning project. The public API may impose rate limits or change; see the Troubleshooting section below if you see errors.

---

## Features

- Convert between common currencies (USD, EUR, GBP, JPY, PKR, INR, AUD, ...)
- Live fetching of exchange rates when inputs change
- Simple, responsive UI

---

## Tech stack

- React (functional components, hooks)
- Vite (dev server + build)
- Fetch API for network requests
- Tailwind-style utility classes (project already includes CSS in `src/index.css`)

---

## Prerequisites

- Node.js (v14+ recommended)
- npm (or pnpm/yarn if you prefer)

This project was developed and tested on Windows using PowerShell.

---

## Getting started (development)

Open a PowerShell window in the project root (where `package.json` is located) and run:

```powershell
npm install
npm run dev
```

- `npm install` installs dependencies.
- `npm run dev` starts the Vite dev server (by default at `http://localhost:5173`).

Open the URL shown by Vite in your browser to try the app.

## Build for production

```powershell
npm run build
npm run preview
```

- `npm run build` bundles the app into `dist/`.
- `npm run preview` runs a local static preview server to inspect the production build.

---

## Configuration / Notes about the API

- The app fetches exchange rates from `https://api.exchangerate-api.com/v4/latest/{BASE}` where `{BASE}` is the currently selected "from" currency.
- This project does not use an API key by default. If you decide to switch to a different provider (for example, one that requires an API key), store keys securely (for example, in environment variables) and do not commit them to source control.

Example: to change the endpoint or add headers, update the `fetch(...)` call in `src/App.jsx`.

---

## Project structure

Top-level files you will commonly look at:

- `index.html` — app HTML shell used by Vite
- `package.json` — scripts and dependencies
- `vite.config.js` — Vite configuration (minimal)
- `src/main.jsx` — React entry point
- `src/App.jsx` — main app component (currency conversion UI + fetch logic)
- `src/index.css` — main styles
- `public/` — static assets

---

## Troubleshooting

- Network errors or empty results:

  - The public API endpoint may be down or rate-limited. Check your browser console for the exact error message.
  - If the API changes or returns unexpected data, update the JSON parsing in `src/App.jsx` accordingly.

- App not starting or ports in use:

  - If Vite fails to start because the port is in use, either stop the other service or run `npm run dev -- --port 5174` to use a different port.

- Lint or build errors after edits:
  - Make sure you didn't accidentally break named imports or JSX syntax. Run the dev server and check terminal + browser console logs.

---

## Contributing

This is a small personal/demo project, but contributions are welcome. Typical contributions:

- Fixing bugs or improving the UX
- Adding more currencies or a better currency picker (searchable list)
- Caching rates locally to reduce API calls
- Adding tests or TypeScript types

When contributing, please:

1. Fork the repository
2. Create a descriptive branch (e.g. `fix/fetch-error-handling`)
3. Open a pull request with a clear description of the change

---

## Security & privacy

- Do not commit API keys or secrets. Use environment variables if you switch to an API that requires authentication.
- Be conscious that exchange-rate APIs may log IPs; check the provider's privacy policy if that's a concern.

---

## License

This project is provided as-is for learning/demo purposes. You can add a license file (for example, MIT) if you want to share it publicly under a permissive license.

---

If you'd like, I can also:

- Add a short demo GIF or screenshot to the README
- Add environment variable support for a different API provider
- Add caching to reduce API calls (localStorage/sessionStorage)

Tell me which of the above you'd like next.
