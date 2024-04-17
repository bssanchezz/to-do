import type { Component } from 'solid-js';
import { For } from 'solid-js';
import Task from './Task';
import TaskObject from '../../domain/task';
import { TaskService } from '../service/taskServices';

type Props = {
  taskList: Array<TaskObject>;
  taskService: TaskService,
  setTaskList: (task: (task: TaskObject) => boolean, text: string, completed: (prevCompleted: boolean) => boolean) => void
}

const TaskList: Component<Props> = (props) => {
  return (
    <div>
      <h3>Tasks</h3>
      <For each={props.taskList} fallback={<div>No Tasks</div>}>
        {(item) => <Task task={item} toggleTask={props.taskService.toggleTask} setTaskList={props.setTaskList} />}
      </For>
    </div>
  );
};

export default TaskList;
