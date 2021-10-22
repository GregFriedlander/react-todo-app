import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { TaskCategory } from '../store';
import { Task } from '../store';
import './CreateTaskComponent.css';

export interface IProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const CreateTaskComponent: React.FC<IProps> = ({ tasks, setTasks }) => {

  const categories: TaskCategory[] = [TaskCategory.any, TaskCategory.coding, TaskCategory.music]

  const [taskData, setTaskData] = useState<Task>({
    title: '',
    description: '',
    category: TaskCategory.any,
  });

  function handleInputUpdate(e: any) {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value
    })
  };

  function handleSubmit(e: any) {
    console.log('Tasks: ', tasks);
    setTasks([
      ...tasks,
      taskData
    ]);
    setTaskData({
      title: '',
      description: '',
      category: TaskCategory.any,
    })
  }

  return (
    <div>
        <div id="form-container">
          <h3>Create New Task</h3>
          <FormGroup>
            <TextField
              type="text"
              color="secondary"
              placeholder='Title'
              value={taskData.title}
              onChange={handleInputUpdate}
              name='title'
            />
            <TextField
              type="text"
              color="secondary"
              placeholder='Description'
              value={taskData.description}
              onChange={handleInputUpdate}
              name='description'
            />
            <Select
              id="category"
              name="category"
              value={taskData.category}
              onChange={handleInputUpdate}
              placeholder='Category'
            >
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
            <Button type="submit" value="Save Task" onClick={handleSubmit}>Save Task</Button>
          </FormGroup>
      </div>
    </div>
  )
}

export default CreateTaskComponent;
