import React, { useState } from 'react';
import './App.css';
// Import icons for edit and trash
import { FiEdit, FiTrash2 } from 'react-icons/fi';

// Dummy data for the initial list appearance
const initialTasks = [
  { id: 1, name: 'explain why jordan is the goat' },
  { id: 2, name: 'eat milk' },
  { id: 3, name: 'buy bread' },
  { id: 4, name: 'go shopping' },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  
  // This function is for demonstration; it doesn't do real editing/deleting yet
  const handleAction = (_action: string, _id: number) => {
    alert('${action} button clicked for task ID: ${id}');
  };

  return (
    <div className="app-container">
      <div className="todo-box">
        <h1 className="todo-title">Get Things Done!</h1>

        {/* Input Form Section */}
        <div className="input-group">
          <input
            type="text"
            placeholder="What is the task today?"
            className="task-input"
          />
          <button className="add-task-btn">Add Task</button>
        </div>

        {/* Task List Section */}
        <div className="task-list">
          {tasks.map(task => (
            <div key={task.id} className="task-item">
              <span className="task-name">{task.name}</span>
              <div className="task-actions">
                <button 
                  className="icon-btn edit-btn" 
                  onClick={() => handleAction('Edit', task.id)}>
                  <FiEdit size={16} />
                </button>
                <button 
                  className="icon-btn delete-btn" 
                  onClick={() => handleAction('Delete', task.id)}>
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;