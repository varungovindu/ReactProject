# 🔐 React OTP Input Component

A clean, modern, and intelligent **OTP (One-Time Password) input** component built using **React**. This project supports smart OTP input behavior — including pasting mixed characters, smooth navigation, and full keyboard support — making it ideal for login, verification, or authentication workflows.

<p align="center">
  <img src="https://via.placeholder.com/600x200.png?text=React+OTP+Input+Preview" alt="OTP UI Screenshot" width="600"/>
</p>

---


## ✨ Key Features

- 🔢 **Custom Length**: Dynamic OTP length (default is 6)
- 🧠 **Smart Paste Support**: Paste any text (e.g. `abc123xyz456`), it extracts only digits and fills the OTP fields perfectly
- ⌨️ **Keyboard Navigation**: 
  - Backspace to delete and move left
  - Left/Right arrows to move across input fields
- 🔐 **One Digit per Field**: Easy to style and validate
- 🎨 **Clean UI**: Basic yet user-friendly and animated interface
- ♻️ **Reusable Component**: Easily used across projects
- 📱 **Responsive**: Works across devices

---

## 🛠️ Tech Stack

- React (Functional Components)
- JavaScript (ES6+)
- CSS for styling
- React Hooks: `useState`, `useRef`

---

## 📁 Folder Structure

ReactProject/
├── public/
├── src/
│ ├── components/
│ │ ├── OTP.jsx // Main OTP logic
│ │ └── style.css // Styling for OTP input
│ ├── App.js
│ └── index.js
├── README.md
├── package.json


---

## ⚙️ Getting Started

To run this project locally:

```bash
git clone https://github.com/varungovindu/ReactProject.git
cd ReactProject
npm install
npm start


