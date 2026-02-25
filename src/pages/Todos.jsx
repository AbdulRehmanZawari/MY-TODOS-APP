import { useState, useCallback, useRef, useEffect } from 'react';
import { storage } from '../utils/storage';

export const useTodos = () => {
  // Tasks aur states ko initialize kar rahe hain
  const [tasks, setTasks] = useState(() => storage.loadTasks());
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  
  const editInputRef = useRef(null);

  // Persistence: Masla na ho islye har change pe save kar rahe hain
  useEffect(() => {
    storage.saveTasks(tasks);
  }, [tasks]);

  // Nayi task add karne ka function
  const addTask = useCallback((e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    setTasks(prev => [...prev, {
      id: Date.now(),
      text: inputValue,
      completed: false
    }]);
    setInputValue(''); // Input khali kar do
  }, [inputValue]);

  // Task delete karne ke liye
  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  // Task complete/incomplete toggle karne ke liye
  const toggleTask = useCallback((id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }, []);

  // Edit mode start karne ke liye
  const startEdit = useCallback((task) => {
    setEditingId(task.id);
    setEditText(task.text);
  }, []);

  // Edit cancel karne ke liye
  const cancelEdit = useCallback(() => {
    setEditingId(null);
    setEditText('');
  }, []);

  // Edited task save karne ke liye
  const saveEdit = useCallback((id) => {
    if (editText.trim() === '') return;
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, text: editText } : task
    ));
    setEditingId(null);
  }, [editText]);

  // Saari chizen wapis de rahe hain
  return {
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
    saveEdit,
    editInputRef
  };
};
