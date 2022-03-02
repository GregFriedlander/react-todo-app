import React, { useContext } from "react";
import "./TaskBoardComponent.css";
import { Task } from "../model";
import TaskContext, { TaskContextObj } from "../TaskContext";
import Checkbox from "@mui/material/Checkbox";

function TaskBoardComponent() {
  const taskContext = useContext<TaskContextObj | null>(TaskContext);
  if (!taskContext) return null;
  const { tasks, markComplete } = taskContext;

  return (
    <div id="board-container">
      <h2>Task List</h2>
      {tasks.map((task: Task) => (
        <div key={task.id} className={"note"}>
          <Checkbox
            checked={task.completed}
            onChange={() => markComplete(task)}
            inputProps={{ "aria-label": "controlled" }}
          />
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskBoardComponent;
