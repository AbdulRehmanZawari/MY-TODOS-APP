# MY TODOS - Modern Productivity Application
# my-todos-arz.netlify.app

MY TODOS is a sleek, modern, and highly responsive To-Do application built with a focus on premium aesthetics and modular code architecture. It provides a seamless experience for organizing tasks with a fresh Ocean-Emerald design.

## 🚀 Key Features

- **Full Todo Management**: Effortlessly Create, Read, Update, and Delete (CRUD) tasks.
- **Dynamic Theme Toggle**: Switch between **Ocean Emerald (Light)** and **Deep Sea Indigo (Dark)** modes with a single click.
- **Data Persistence**: All your tasks and theme preferences are automatically saved to `localStorage`, so your progress is never lost on refresh.
- **Premium Aesthetics**: Features a professional "Glassmorphism" design, smooth transitions, and vibrant gradients.
- **Scrollable Focus**: The task container is optimized to show 4 items at a time, keeping your workspace clean while supporting unlimited tasks via a custom themed scroller.
- **Mobile-First Responsiveness**: Designed to look and function perfectly on everything from desktop monitors to ultra-small mobile devices (down to 320px).

## 🛠️ Technology Stack

- **Frontend Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (utilizing CSS Variables, Flexbox, and Media Queries)
- **Icons**: Emoji-based for lightweight performance.
- **State Management**: Custom React Hooks (`useState`, `useCallback`, `useRef`).

## 📂 Modular Architecture

The project is organized for maximum maintainability and clarity:

- **`src/App.jsx`**: The main orchestrator that connects the logic to the visual components.
- **`src/pages/Todos.jsx`**: Houses the `useTodos` custom hook, managing all task-related state and callbacks.
- **`src/components/Util.jsx`**: A consolidated library of UI components (`Navbar`, `Header`, `TodoItem`, etc.) and the `useTheme` hook.
- **`src/utils/storage.js`**: A dedicated persistence layer for interacting with the browser's `localStorage`.
- **`src/App.css`**: Centralized styles with modular sections for layout, theme variables, and responsiveness.

## 🏁 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Usage
1. Clone or download the repository.
2. Navigate to the `Frontend` directory in your terminal.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## 📄 Documentation
For a deep dive into how every single line of code works, please refer to the **`Readme.txt`** file located in the root directory.

---
Developed by **ARZAWARI**
