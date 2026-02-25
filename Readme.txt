================================================================================
PROJECT DOCUMENTATION: LINE-BY-LINE EXPLANATION
================================================================================

This document provides a detailed, line-by-line explanation for the core files 
of the MY TODOS application.

--------------------------------------------------------------------------------
1. FILE: src/App.jsx
--------------------------------------------------------------------------------
Line 1:  Imports the main CSS file for styling.
Line 2:  Imports the 'useTodos' custom hook which contains all the logic for tasks.
Line 3:  Imports UI components and the theme hook from the Util component file.
Line 5:  Defines the main 'App' functional component.
Line 6:  Destructures 'isDark' (current theme) and 'toggleTheme' from the 'useTheme' hook.
Line 7-20: Destructures all task-related state and functions from the 'useTodos' hook.
Line 22: Returns the JSX (HTML-like) code for the application.
Line 23: Main wrapper div. Applies 'dark-theme' class if 'isDark' is true.
Line 24: Renders the Navbar component, passing theme state and the toggle function.
Line 26: Renders the Header component (the title section).
Line 28: Main container for the todo list.
Line 29-33: Renders the TodoForm component with props for adding new tasks.
Line 35: Unordered list container for tasks.
Line 36: Maps through the 'tasks' array to render each task individually.
Line 37-48: Renders the TodoItem component for each task, passing numerous props.
Line 38: Uses the unique 'task.id' as a key for React's efficient rendering.
Line 40: Checks if this specific task is currently being edited.
Line 50-52: Conditional rendering: shows a message if the task list is empty.
Line 56: Renders the Footer component.
Line 61: Exports the App component to be used in main.jsx.

--------------------------------------------------------------------------------
2. FILE: src/pages/Todos.jsx (Custom Hook)
--------------------------------------------------------------------------------
Line 1:  Imports necessary React hooks (state, callbacks, refs, effects).
Line 2:  Imports the storage utility to save/load from localStorage.
Line 4:  Defines and exports the 'useTodos' custom hook.
Line 5:  Initializes 'tasks' state by loading them from storage.
Line 6:  State for the main task input field text.
Line 7:  State to track which task ID is currently being edited.
Line 8:  State for the text being typed while editing a task.
Line 10: Creates a 'ref' to handle DOM focus (though used in the components).
Line 13-15: useEffect hook: automatically saves tasks to localStorage whenever they change.
Line 17: Defines 'addTask' using useCallback to prevent unnecessary re-renders.
Line 18: Prevents the default form submission (page refresh).
Line 19: Validates that the input is not empty.
Line 21-25: Adds a new task object (id, text, completed) to the tasks array.
Line 26: Clears the input field after adding.
Line 29-31: 'deleteTask': filters out the task with the matching ID.
Line 33-37: 'toggleTask': flips the 'completed' status of the selected task.
Line 39-42: 'startEdit': sets the editing ID and populates edit text with current text.
Line 44-47: 'cancelEdit': resets editing state.
Line 49-55: 'saveEdit': updates the task text in the array and closes edit mode.
Line 57-71: Returns all states and functions so App.jsx can use them.

--------------------------------------------------------------------------------
3. FILE: src/App.css
--------------------------------------------------------------------------------
Line 1-14: Defines global CSS variables (colors, gradients, shadows) for Light Mode.
Line 16-29: Overrides those variables for '.dark-theme' to change the look.
Line 31-38: Basic body styles: font, background, and smooth color transitions.
Line 40-44: Full-height wrapper to keep the footer at the bottom.
Line 47-55: Navbar styles: sticky positioning and subtle shadow.
Line 66-73: Logo styles: uses a gradient text effect.
Line 75-92: Theme toggle button: circular design with hover rotation.
Line 95-112: Header styles: centered text and responsive font sizes (using clamp).
Line 115-127: Main container: 'glassmorphism' effect with blur and rounded corners.
Line 130-134: Input group layout (flexbox).
Line 136-152: Text input styling: rounded borders and focus glow.
Line 154-169: 'Add Task' button: themed background and hover lift effect.
Line 172-178: Todo list container: adds a 290px max-height to hide extra items.
Line 176: 'overflow-y: auto' enables the internal scroller.
Line 181-200: Custom scrollbar styling: makes the scroller look premium and themed.
Line 202-214: Individual todo item card: shadow, padding, and smooth hover scale.
Line 234-256: Custom checkbox design using a circle and a checkmark symbol.
Line 258-263: Task text styling: uses 'ellipsis' to cut off very long text gracefully.
Line 277-291: Action icons (pencil/bin): hover scaling for interactive feel.
Line 293-294: 'Save' and 'Cancel' button styles for editing mode.
Line 311-348: Footer styles: centers the copyright text and credits link.
Line 350-388: Media queries: adjusts layout for mobile phones and small screens.
Line 390-394: Empty message styling for when no tasks exist.
