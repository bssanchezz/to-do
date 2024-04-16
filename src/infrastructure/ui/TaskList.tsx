import type { Component } from 'solid-js';
import { For } from 'solid-js';
import Task from './Task';
import TaskObject from '../../domain/task';

type Props = {
  taskList: Array<TaskObject>;
  toggleTask: (id: number,  setTaskList: (taskList: TaskObject[]) => void) => void;
  setTaskList: (taskList: TaskObject[]) => void
}

const TaskList: Component<Props> = (props) => {
  return (
    <div>
      <h3>Tasks</h3>
      <For each={props.taskList} fallback={<div>No Tasks</div>}>
        {(item) => <Task task={item} toggleTask={props.toggleTask} setTaskList={props.setTaskList}/>}
      </For>
    </div>
  );
};

export default TaskList;
