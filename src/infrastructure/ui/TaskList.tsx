import { Component, For, Setter } from 'solid-js';
import { SetStoreFunction } from 'solid-js/store';

import TaskObject from '../../domain/taskObject';

import Task from './Task';

type Props = {
  setRefresh: Setter<boolean>,
  tasksStore: TaskObject[],
  setTasksStore: SetStoreFunction<TaskObject[]>
};

const TaskList: Component<Props> = (props: Props) => {

  const { setRefresh, tasksStore, setTasksStore } = props;

  return (
    <div>
      <h3>Tasks</h3>
      <For each={tasksStore} fallback={<div>No Tasks</div>}>
        {(item) => <Task task={item} setRefresh={setRefresh} setTasksStore={setTasksStore} />}
      </For>
    </div>
  );
};

export default TaskList;
