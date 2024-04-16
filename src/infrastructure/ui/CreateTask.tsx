import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { taskServices } from '../../usecases/taskServices';
import TaskList from './TaskList';
import { createTaskService } from '../../usecases/createTaskService';
export const [task, setTask] = createSignal<string>("");
const CreateTask: Component = () => {
  const [input, onInput] = createSignal<string>("");

  const { serviceAddTask, serviceToggleTask, serviceGetTasks } = taskServices();

  //const { addTask, toggleTask, getTasks } = createTaskService();

  const addTaskToList = () => {
    serviceAddTask(input());
    onInput("");
  };

  return (
    <>
      <div>
        <label for="create-task">Create a task</label>
        <input type="text" id="create-task" onInput={(e) => onInput(e.currentTarget.value)} value={input()} />
        <button onClick={addTaskToList}>Create</button>
        <TaskList taskList={serviceGetTasks()} toggleTask={serviceToggleTask} />
      </div >
    </>
  );
};

export default CreateTask;