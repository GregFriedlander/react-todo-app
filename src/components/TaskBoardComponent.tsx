import React, { useContext } from 'react';
import './TaskBoardComponent.css';
import TaskContext, { Task } from '../store';

function TaskBoardComponent() {
  const tasks = useContext<Task[]>(TaskContext);

  return (
    <div>
      <div id="board-container">
        {tasks.map((task: Task) => (
          <p key={task.title}>{task.title}</p>
        ))}
      </div>
    </div>
  )
}

export default TaskBoardComponent;
