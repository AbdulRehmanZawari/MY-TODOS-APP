import { useState, useEffect, useCallback } from 'react';
import { storage } from '../utils/storage';

// --- Theme change karne wala Hook ---
export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => storage.loadTheme());

  useEffect(() => {
    storage.saveTheme(isDark);
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDark]);

  const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

  return { isDark, toggleTheme };
};

// --- Saare UI Components ---

// Navbar: Oper wala hissa jahan logo aur theme button hai
export const Navbar = ({ isDark, onToggleTheme }) => (
  <nav className="navbar">
    <div className="nav-content">
      <span className="logo">MY TODOS</span>
      <button className="theme-toggle" onClick={onToggleTheme}>
        {isDark ? '🌙' : '☀️'}
      </button>
    </div>
  </nav>
);

// Header: Page ka title aur thori details
export const Header = () => (
  <header className="main-header">
    <h1>Organize Your Life</h1>
    <p>Stay productive and focused.</p>
  </header>
);

// TodoForm: Nayi task likhne aur add karne ke liye
export const TodoForm = ({ inputValue, onInputChange, onAdd }) => (
  <form className="input-group" onSubmit={onAdd}>
    <input 
      type="text" 
      placeholder="Add a new task..." 
      value={inputValue}
      onChange={(e) => onInputChange(e.target.value)}
    />
    <button type="submit" className="add-btn">Add Task</button>
  </form>
);

// TodoItem: Har single task card ki logic aur UI
export const TodoItem = ({ 
  task, 
  isEditing, 
  editText, 
  onToggle, 
  onStartEdit, 
  onCancelEdit, 
  onSaveEdit, 
  onDelete, 
  onEditChange 
}) => (
  <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
    {isEditing ? (
      // Agar editing chal rahi ho tou ye dikhega
      <div className="edit-mode">
        <input 
          type="text" 
          value={editText}
          onChange={(e) => onEditChange(e.target.value)}
          autoFocus
        />
        <div className="edit-actions">
          <button className="save-btn" onClick={() => onSaveEdit(task.id)}>Save</button>
          <button className="cancel-btn" onClick={onCancelEdit}>Cancel</button>
        </div>
      </div>
    ) : (
      // Normal task view
      <>
        <div className="todo-content" onClick={() => onToggle(task.id)}>
          <div className="checkbox"></div>
          <span className="todo-text">{task.text}</span>
        </div>
        <div className="item-actions">
          <button className="edit-btn" title="Edit Task" onClick={() => onStartEdit(task)}>
            ✏️
          </button>
          <button className="delete-btn" title="Delete Task" onClick={() => onDelete(task.id)}>
            🗑️
          </button>
        </div>
      </>
    )}
  </li>
);

// Footer: Sab se niche wala hissa
export const Footer = () => (
  <footer className="footer">
    <div className="footer-bottom">
      <p>&copy; 2026 Developed by <a href="https://github.com/AbdulRehmanZawari">ARZAWARI</a>. All rights reserved.</p>
    </div>
  </footer>
);
