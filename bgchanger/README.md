# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Background Color Changer 🎨

A simple React project built using **React + Tailwind CSS** where users can change the background color of the page by clicking different color buttons.

---

## 🚀 Features

* Change background color dynamically
* Smooth transition effect
* Clean and responsive UI
* Fixed button panel at the bottom
* Built using React Hooks (`useState`)
* Styled using Tailwind CSS

---

## 🛠️ Technologies Used

* React JS
* Tailwind CSS
* JavaScript (ES6)
* Vite

---

## 📂 Project Structure

```bash
src/
│
├── App.jsx
├── main.jsx
├── index.css
│
public/
│
package.json
```

---

## ⚙️ How It Works

The project uses React's `useState()` Hook to store and update the background color dynamically.

### Default State

```javascript
const [color, setColor] = useState("olive")
```

### Button Click Example

```javascript
onClick={() => setColor("red")}
```

Whenever the user clicks a button, the `setColor()` function updates the full-screen background color instantly.

---

## 🎯 Available Colors

* Red
* Skyblue
* Green
* Orange
* Yellow
* Blue
* Pink

---

## ▶️ Run This Project

### Step 1: Clone the Repository

```bash
git clone 
```

### Step 2: Move to Project Folder

```bash
cd your-project-folder
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start Development Server

```bash
npm run dev
```

---

## 📸 Output

A full-screen page with colorful buttons fixed at the bottom of the screen. Clicking any button changes the entire background color instantly.

---

## 📚 Learning Concepts Used

* React Functional Components
* useState Hook
* Event Handling in React
* Inline Styling
* Tailwind CSS Utility Classes
* Responsive Layout Design

---

## 👨‍💻 Author

**Harish Singh Latwal**

---

## ⭐ Future Improvements

* Add more colors
* Add Dark/Light mode toggle
* Add custom color picker
* Save selected color using localStorage
* Add animation effects

---

## ❤️ Conclusion

This is a beginner-friendly React project that helps in understanding state management using `useState`, event handling, and Tailwind CSS styling.

A perfect mini project for practicing React fundamentals.

---

Made with ❤️ using React + Tailwind CSS
