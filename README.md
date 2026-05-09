# 🕐 Rolex Analog Clock

A luxury-styled analog clock built with pure HTML, CSS, and JavaScript — no libraries, no frameworks. Inspired by the iconic Rolex aesthetic, with smooth real-time hands and a sleek circular face.

## ✨ Features

- **Real-time clock** — updates every second using `setInterval`
- **Analog hand animation** — hour, minute, and second hands rotate using CSS `transform: rotate()`
- **Rolex-branded design** — crown logo displayed on the clock face
- **Lightweight** — zero dependencies, pure vanilla HTML/CSS/JS
- **Responsive** — centered layout using Flexbox

---

## 🗂️ Project Structure

```
rolex-analog-clock/
├── index.html       # Clock markup and structure
├── style.css        # Clock face, hands, numbers, and layout styling
├── script.js        # Real-time logic — reads system time and rotates hands
└── rolexlogo.png    # Rolex crown logo displayed on the clock face
```

---

## 🚀 Getting Started

No build tools or installations required.

**1. Clone the repository**
```bash
git clone https://github.com/ukofi/rolex-analog-clock.git
```

**2. Open in your browser**
```bash
cd rolex-analog-clock
open index.html
```
Or simply double-click `index.html` to open it in any browser.

---

## 🧠 How It Works

The clock reads the current system time using JavaScript's `Date` object and converts each unit into a rotation degree:

```js
const hourDeg   = (hour / 12) * 360;      // Full rotation = 12 hours
const minuteDeg = (minute / 60) * 360;    // Full rotation = 60 minutes
const secondDeg = (second / 60) * 360;    // Full rotation = 60 seconds
```

Each hand is an absolutely positioned `div` with `transform-origin: bottom center`, so rotating it pivots from the clock's centre point. `setInterval` calls the update function every 1000ms to keep time accurate.

---

## 🎨 Styling Highlights

| Element | Style |
|---|---|
| Clock face | Light grey circle, dark border, drop shadow |
| Hour hand | White, short and thick |
| Minute hand | White, longer and thinner |
| Second hand | Goldenrod / gold colour |
| Centre pin | Green circle, layered on top with `z-index` |
| Numbers | Light golden yellow with text shadow |

---

## 🛠️ Built With

- **HTML5** — semantic structure
- **CSS3** — Flexbox layout, `transform`, `border-radius`, `box-shadow`
- **Vanilla JavaScript** — `Date` object, `setInterval`, `style.transform`

---

## 📌 Future Improvements

- [ ] Add smooth hand sweeping (sub-second CSS transitions)
- [ ] Add all 12 hour numbers around the face
- [ ] Add tick marks between numbers
- [ ] Make the clock face size responsive to viewport
- [ ] Add a dark/night mode theme
- [ ] Add date display window (like a real Rolex)

---

## 👤 Author

**Kofi Unathi**
- GitHub: [@ukofi](https://github.com/ukofi)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

> *Logo used for personal/educational project purposes only. Rolex is a registered trademark of Rolex S.A.*
