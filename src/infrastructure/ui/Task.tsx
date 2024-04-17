import type { Component, Setter } from 'solid-js';
import { SetStoreFunction } from 'solid-js/store';

import TaskObject from '../../domain/taskObject';

import { TaskPersistenceServiceInterface, TaskPersistenceService } from '../service/taskPersistenceService';
import { ToggleTaskInterface, ToggleTask } from '../../usecases/toggleTask';

type Props = {
  task: TaskObject;
  setRefresh: Setter<boolean>;
  setTasksStore: SetStoreFunction<TaskObject[]>;
};

const Task: Component<Props> = (props: Props) => {

  const { task, setRefresh, setTasksStore } = props;

  const toggleTask = (id: number): void => {
    const taskService: TaskPersistenceServiceInterface = new TaskPersistenceService();
    const toggleTask_: ToggleTaskInterface = new ToggleTask(taskService);
    try {
      toggleTask_.toggleTask(id);

      setTasksStore(
        (task: TaskObject) => task.id === id,
        "completed",
        (completed: boolean) => !completed);

      setRefresh(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <span class="text-lg pr-4" style={{ "text-decoration": task.completed ? "line-through" : "none" }}>{task.text}</span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
    </div>
  );
};

export default Task;
