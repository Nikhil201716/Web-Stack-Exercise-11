import React, { useState } from 'react';

const TaskForm = ({ onSave, onCancel, taskToEdit }) => {
  const [taskName, setTaskName] = useState(taskToEdit ? taskToEdit.name : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') {
      alert('Task name cannot be empty!');
      return;
    }
    onSave({ name: taskName });
    setTaskName('');
  };

  return (
    <div>
      <h2>{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">{taskToEdit ? 'Update' : 'Add'}</button>
        {taskToEdit && <button onClick={onCancel}>Cancel</button>}
      </form>
    </div>
  );
};

export default TaskForm;
