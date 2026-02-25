export const storage = {
  // Tasks save karne ke liye
  saveTasks: (tasks) => {
    localStorage.setItem('todo-tasks', JSON.stringify(tasks));
  },
  // Saved tasks wapis lane ke liye
  loadTasks: () => {
    const savedTasks = localStorage.getItem('todo-tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  },
  // Theme preference save karne ke liye
  saveTheme: (isDark) => {
    localStorage.setItem('taskmaster-theme', isDark ? 'dark' : 'light');
  },
  // Saved theme load karne ke liye
  loadTheme: () => {
    const savedTheme = localStorage.getItem('taskmaster-theme');
    return savedTheme === 'dark';
  }
};
