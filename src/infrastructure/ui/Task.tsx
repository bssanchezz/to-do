import type { Component } from 'solid-js';
import TaskObject from '../../domain/task';

type Props = {
  task: TaskObject;
  toggleTask: (id: number, setTaskList: (taskList: TaskObject[]) => void) => void;
  setTaskList: (taskList: TaskObject[]) => void
};

const Task: Component<Props> = (props) => {
  console.log(props.task)
  return (
    <div>
      <span style={{ "text-decoration": props.task.completed ? "line-through" : "none" }}>{props.task.text}</span>
      <input
        type="checkbox"
        checked={props.task.completed}
        onChange={() => props.toggleTask(props.task.id, props.setTaskList)}
      />
    </div>
  );
};

export default Task;
