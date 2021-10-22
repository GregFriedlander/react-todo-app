import React, { useState } from 'react';
import './App.css';
import CreateTaskComponent from './components/CreateTaskComponent';
import TaskBoardComponent from './components/TaskBoardComponent';
import TaskContext, { initialState, Task } from './store';

function App() {
  /*
  * As this grew it would move out of app comp
  * */
  const [tasks, setTasks] = useState<Task[]>(initialState);

  return (
    <div>
      <h1>To Do List</h1>
      <div id='main-container'>
        <TaskContext.Provider value={tasks}>
          <CreateTaskComponent tasks={tasks} setTasks={setTasks}/>
          <TaskBoardComponent/>
        </TaskContext.Provider>
      </div>
    </div>
  );
}

export default App;
