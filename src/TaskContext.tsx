import React, { createContext, useState } from "react";
import { initialState, Task } from "./model";

type TaskProviderProps = { children: React.ReactNode };

export interface TaskContextObj {
  tasks: Task[];
  addNewTask: (newTask: Task) => void;
  markComplete: (task: Task) => void;
}

const TaskContext = createContext<TaskContextObj | null>(null);

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(initialState);

  const addNewTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const markComplete = (task: Task) => {
    let newTasks = tasks.map((t) => {
      let updatedTasks = { ...t };
      if (t.id === task.id) {
        updatedTasks.completed = !updatedTasks.completed;
      }
      return updatedTasks;
    });
    setTasks(newTasks);
  };

  const value = { tasks, addNewTask, markComplete };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export default TaskContext;
