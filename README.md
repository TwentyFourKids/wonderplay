# Wonderplay

Six interactive English speaking games for lessons. The teacher selects a theme, age band and CEFR level; the learner answers aloud and places seven of fourteen items in a scene.

## Play online

https://twentyfourkids.github.io/wonderplay/

## Local development

The published site lives in `docs/`. Open `docs/index.html` in a modern browser, or run `node dev-server.cjs` and open http://127.0.0.1:4173/.

GitHub Pages publishes the `docs/` folder from the `main` branch whenever its files change. No build step or backend is required.

## Content

`docs/data.js` and `docs/heritage-data.js` contain six themes, 84 items and 1008 authored questions. Each item's `questions` array follows age order 5–8, 9–14, 15–17, 18+, with level order A1, A2, B1 inside each age band. Scene artwork and interaction are in `docs/app.js` and `docs/heritage.js`; styles are in `docs/styles.css`.

The current round stays in browser memory only. No student accounts, answer entry, analytics or persistent records are used.
