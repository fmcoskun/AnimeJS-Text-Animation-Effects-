# AnimeJS Text Animation Effects

A small demo of looping text animations built with [Anime.js](https://animejs.com/) v3.2.1. Each letter of the title is wrapped in its own `<span>` and driven by a timeline with staggered delays: letters drop in and scale down, slide out to the left, slide back in from the right, and finally zoom outward while fading.

**Live demo:** https://fmcoskun.github.io/AnimeJS-Text-Animation-Effects-/

## Demo

https://user-images.githubusercontent.com/107512348/210157772-399d903c-c548-40ca-bcc5-6c0ca1a3b795.mp4

## Features

- Pure HTML, CSS and JavaScript, no build step
- Per-letter animation using `anime.stagger()`
- Looping `anime.timeline()` with four chained steps
- Easy to tweak: change the text, colors, durations, easings or stagger values in `index.html` / `style.css`

## Getting started

No installation is required.

1. Clone the repository:
   ```bash
   git clone https://github.com/fmcoskun/AnimeJS-Text-Animation-Effects-.git
   cd AnimeJS-Text-Animation-Effects-
   ```
2. Open `index.html` in your browser, or serve the folder with any static server, for example:
   ```bash
   npx serve .
   ```

## Project structure

```
.
├── index.html      # Markup and the Anime.js timeline
├── style.css       # Layout, colors and typography
└── anime.min.js    # Anime.js v3.2.1 (vendored, MIT licensed)
```

## How it works

1. The script splits the text of `.text` into individual character spans.
2. An `anime.timeline({ loop: true })` runs four steps in order:
   - **Drop in:** `translateY` from `-600` to `0`, `scale` from `10` to `1`
   - **Slide out:** `translateX` from `0` to `-1000`, fading out
   - **Slide in:** `translateX` from `1000` to `0`, fading in
   - **Zoom out:** `scale` from `1` to `50`, fading out
3. `delay: anime.stagger(100)` offsets each letter by 100 ms, which creates the wave effect.

## Customization

Change the title in `index.html`:

```html
<h2 class="text">Your Text Here</h2>
```

Change the color in `style.css`:

```css
section .text {
  color: #00fe77;
}
```

## Credits

- [Anime.js](https://github.com/juliangarnier/anime) by Julian Garnier, released under the MIT license.

## License

The bundled Anime.js library is released under the MIT license (see the header of `anime.min.js`).
