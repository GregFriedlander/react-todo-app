import React from "react";
import "./App.css";
import CreateTaskComponent from "./components/CreateTaskComponent";
import TaskBoardComponent from "./components/TaskBoardComponent";
import { TaskProvider } from "./TaskContext";

function App() {
  return (
    <div id="main-container">
      <TaskProvider>
        <CreateTaskComponent />
        <TaskBoardComponent />
      </TaskProvider>
    </div>
  );
}

export default App;
