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
    if (!input()) return;
    props.addTask(id(), input(), props.taskList, props.setTaskList);
    onInput("");
    setId(id() + 1)
  };

  return (
    <>
      <div class="flex flex-row items-center justify-around">
        <label class="text-xl" for="create-task">Create a task</label>
        <input type="text" id="create-task" class="h-8 rounded-lg" onInput={(e) => onInput(e.currentTarget.value)} value={input()} />
        <button class="btn btn-primary" onClick={addTaskToList}>Create</button>
      </div >
    </>
  );
};

export default CreateTask;