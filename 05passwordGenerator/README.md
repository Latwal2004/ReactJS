# 🔐 Password Generator

A fast, minimal, fully client-side password generator built with **React** and styled with **Tailwind CSS**. No server. No storage. No tracking. Your passwords never leave your browser.

---

## ✨ Features

- ⚡ Instant password generation on every settings change
- 🔢 Optional number inclusion (`0–9`)
- 🔣 Optional special character inclusion (`!@#$%^&*` etc.)
- 📏 Adjustable length from **6 to 100** characters
- 📋 One-click copy to clipboard with visual text selection
- ♻️ Auto-regenerates on every option tweak — no manual refresh needed

---

## 🖥️ Demo

```
┌──────────────────────────────┬────────┐
│  xK#9mZ@q2!vT                │  copy  │
└──────────────────────────────┴────────┘

 ────────●───────────────  Length: 14

 ☑ Number    ☑ Character
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Latwal2004/ReactJS/tree/main/05passwordGenerator

# 2. Move into the project directory
cd password-generator

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder — deploy anywhere (Vercel, Netlify, GitHub Pages).

---

## 🧠 How It Works

### Character Pool Construction

The generator starts with the full English alphabet (upper + lowercase) and conditionally extends the pool based on user toggles:

```
Base:     ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
Numbers:  + 0123456789          (if toggled on)
Symbols:  + !@#$%^&*-_+=[]{}~` (if toggled on)
```

A cryptographically-seeded random index picks one character per iteration until the desired length is reached.

### React Hooks Used

| Hook | Role in this project |
|---|---|
| `useState` | Tracks length, toggles, and the generated password |
| `useCallback` | Memoizes generator and copy functions to prevent unnecessary re-creation |
| `useEffect` | Re-runs the generator whenever length or toggle options change |
| `useRef` | Holds a direct DOM reference to the input for programmatic text selection |

---

## 🐛 Known Bug & Fix

There is an off-by-one error in the random index calculation:

```js
// ❌ BUG — +1 can push index out of bounds → str.charAt() returns ""
let char = Math.floor(Math.random() * str.length + 1)

// ✅ FIX — correct random index within bounds
let char = Math.floor(Math.random() * str.length)
```

This causes the generated password to occasionally be shorter than the requested length because `String.prototype.charAt()` returns an empty string for out-of-range indices.

---

## 📁 Project Structure

```
password-generator/
├── src/
│   ├── App.jsx          # Main component — all logic lives here
│   ├── App.css          # Component-level styles
│   └── main.jsx         # React DOM entry point
├── index.html           # HTML shell
├── vite.config.js       # Vite config
├── tailwind.config.js   # Tailwind config
└── package.json
```

---

## 🔬 Hook Deep Dive

### `useCallback`

```js
const passwordGenerator = useCallback(() => {
  // ...
}, [length, numberAllowed, charAllowed, setPassword])
```

**Why:** Without memoization, a new function reference is created on every render. Since `passwordGenerator` is listed as a dependency of `useEffect`, an unmemoized version would trigger the effect on every render — causing an infinite loop.

**Rule:** Every value read inside the callback must appear in its dependency array. Missing deps cause **stale closures** — the function silently reads an old value.

---

### `useEffect`

```js
useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed, passwordGenerator])
```

**Why:** This syncs the displayed password with current settings automatically. Whenever the user moves the slider or toggles a checkbox, the effect fires and a new password appears without any button click.

**Dependency array behaviour:**

| Array | Runs when |
|---|---|
| omitted | After every render |
| `[]` | Once on mount only |
| `[a, b]` | When `a` or `b` changes |
| `return () => {}` | Cleanup on unmount or before next run |

---

### `useRef`

```js
const passwordRef = useRef(null)

// Attach:
<input ref={passwordRef} ... />

// Use:
passwordRef.current?.select()
passwordRef.current?.setSelectionRange(0, 15)
```

**Why:** `useRef` gives a stable, direct handle to the DOM node across renders without causing re-renders. The optional chaining (`?.`) safely handles the case where the ref hasn't mounted yet.

**Two main use cases:**
1. **DOM access** — focus, select, measure, animate
2. **Mutable persistent value** — store previous state, timer IDs, or flags that shouldn't trigger re-renders

---

## 🛡️ Security Notes

- All generation happens **entirely in the browser** — no data is sent to any server
- Uses `Math.random()` — suitable for general use but **not cryptographically secure**
- For high-security needs (e.g. master passwords, key generation), prefer [`crypto.getRandomValues()`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues)

```js
// Cryptographically secure alternative:
const array = new Uint32Array(1)
crypto.getRandomValues(array)
const index = array[0] % str.length
```

---

## 🧪 Possible Improvements

- [ ] Fix the off-by-one bug in random index generation
- [ ] Swap `Math.random()` for `crypto.getRandomValues()` for stronger randomness
- [ ] Add a password strength indicator (entropy-based)
- [ ] Support excluding ambiguous characters (`0`, `O`, `l`, `1`)
- [ ] Add a history of recently generated passwords (session-only)
- [ ] Keyboard shortcut to copy (`Ctrl+C` / `Cmd+C` on focus)
- [ ] Dark/light theme toggle

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

```bash
# Fork → Clone → Branch → Code → PR
git checkout -b feature/your-feature-name
```

---

## 📄 License

[MIT](./LICENSE) — free to use, modify, and distribute.

---

## 👤 Author

Built with 🧠 and ⚛️ React.  
*First project using `useCallback`, `useEffect`, and `useRef` — learned by building.*