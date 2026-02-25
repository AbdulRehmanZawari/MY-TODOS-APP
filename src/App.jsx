import './App.css'; // CSS file import kar rahe hain
import { useTodos } from './pages/Todos'; // Task logic wala custom hook
import { useTheme, Navbar, Header, TodoForm, TodoItem, Footer } from './components/Util'; // UI components aur theme hook

function App() {
  // Theme management: IsDark check karta hai aur toggleTheme change karta hai
  const { isDark, toggleTheme } = useTheme();
  
  // Task management: Saara data aur functions useTodos se mil raha hai
  const {
    tasks,
    inputValue,
    setInputValue,
    editingId,
    editText,
    setEditText,
    addTask,
    deleteTask,
    toggleTask,
    startEdit,
    cancelEdit,
    saveEdit
  } = useTodos();

  return (
    // Body ka main container, isDark true ho tou dark-theme apply hoga
    <div className={`app-wrapper ${isDark ? 'dark-theme' : ''}`}>
      {/* Navbar show kar rahe hain */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      
      {/* Page ka header title */}
      <Header />

      <main className="todo-container">
        {/* Task add karne wala form */}
        <TodoForm 
          inputValue={inputValue} 
          onInputChange={setInputValue} 
          onAdd={addTask} 
        />

        {/* Saari tasks ki list yahan render hogi */}
        <ul className="todo-list">
          {tasks.map(task => (
            <TodoItem 
              key={task.id}
              task={task}
              isEditing={editingId === task.id}
              editText={editText}
              onToggle={toggleTask}
              onStartEdit={startEdit}
              onCancelEdit={cancelEdit}
              onSaveEdit={saveEdit}
              onDelete={deleteTask}
              onEditChange={setEditText}
            />
          ))}
          {/* Agar tasks khatam hon tou ye msg dikhega */}
          {tasks.length === 0 && (
            <p className="empty-msg">No tasks yet. Start by adding one!</p>
          )}
        </ul>
      </main>

      {/* Footer credits ke sath */}
      <Footer />
    </div>
  );
}

export default App; // Component export kar rahe hain
