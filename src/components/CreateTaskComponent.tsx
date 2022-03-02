import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

import React, { useContext, useState } from "react";
import { TaskCategory } from "../model";
import { Task } from "../model";
import TaskContext, { TaskContextObj } from "../TaskContext";
import "./CreateTaskComponent.css";

// export interface IProps {
//   tasks: Task[];
//   setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
// }

function CreateTaskComponent() {
  const [newTask, setNewTask] = useState<Task>({
    id: 0,
    title: "",
    description: "",
    category: TaskCategory.any,
    completed: false,
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const taskContext = useContext<TaskContextObj | null>(TaskContext);
  if (!taskContext) return null;
  const { addNewTask } = taskContext;

  const categories: TaskCategory[] = [
    TaskCategory.any,
    TaskCategory.coding,
    TaskCategory.music,
  ];

  function handleInputUpdate(
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit() {
    addNewTask(newTask);
    setNewTask({
      id: 0,
      title: "",
      description: "",
      category: TaskCategory.any,
      completed: false,
    });
    handleClose();
  }

  return (
    <>
      <Button onClick={handleOpen}>X</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div id="form-container">
          <h3>Create New Task</h3>
          <FormGroup id={"new-form"}>
            <TextField
              type="text"
              color="secondary"
              placeholder="Title"
              value={newTask.title}
              onChange={handleInputUpdate}
              name="title"
              className={"sm-input"}
            />
            <Select
              id="category"
              name="category"
              value={newTask.category}
              onChange={handleInputUpdate}
              placeholder="Category"
              className={"sm-input"}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
            <TextField
              type="text"
              color="secondary"
              placeholder="Description"
              value={newTask.description}
              onChange={handleInputUpdate}
              name="description"
              className={"lg-input"}
            />
            <Button type="submit" value="Save Task" onClick={handleSubmit}>
              Save Task
            </Button>
          </FormGroup>
        </div>
      </Modal>
    </>
  );
}

export default CreateTaskComponent;
