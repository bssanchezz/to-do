import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import TaskObject from '../../domain/task';

type Props = {
  addTask: (id: number, text: string, taskList: TaskObject[], setTaskList: (taskList: TaskObject[]) => void) => void;
  taskList: TaskObject[],
  setTaskList: (taskList: TaskObject[]) => void
};

const CreateTask: Component<Props> = (props) => {
  const [input, onInput] = createSignal<string>("");
  const [id, setId] = createSignal(1)

  const addTaskToList = () => {
    props.addTask(id(), input(), props.taskList, props.setTaskList);
    onInput("");
    setId(id() + 1)
  };

  return (
    <>
      <div>
        <label for="create-task">Create a task</label>
        <input type="text" id="create-task" onInput={(e) => onInput(e.currentTarget.value)} value={input()} />
        <button onClick={addTaskToList}>Create</button>
      </div >
    </>
  );
};

export default CreateTask;