import React from 'react';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} -{' '}
            <button onClick={() => onDelete(index)}>Delete</button>
            <button onClick={() => onEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
