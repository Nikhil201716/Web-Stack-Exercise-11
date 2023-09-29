import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (index) => {
    setEditIndex(index);
  };

  const updateTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
    setEditIndex(null);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const cancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <div className="App">
      <TaskForm
        onSave={(task) => {
          if (editIndex !== null) {
            updateTask(editIndex, task);
          } else {
            addTask(task);
          }
        }}
        onCancel={cancelEdit}
        taskToEdit={editIndex !== null ? tasks[editIndex] : null}
      />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
}

export default App;
