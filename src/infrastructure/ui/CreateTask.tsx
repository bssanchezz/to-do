import { Component, Setter, createSignal } from 'solid-js';
import { SetStoreFunction } from 'solid-js/store';

import TaskObject from '../../domain/taskObject';

import { TaskPersistenceServiceInterface, TaskPersistenceService } from '../service/taskPersistenceService';
import { AddTaskInterface, AddTask } from '../../usecases/addTask';

type Props = {
  setRefresh: Setter<boolean>
  tasksStore: TaskObject[]
  setTasksStore: SetStoreFunction<TaskObject[]>;
};

const CreateTask: Component<Props> = (props: Props) => {

  const { setRefresh, tasksStore, setTasksStore } = props;

  const [input, onInput] = createSignal<string>("");
  const [id, setId] = createSignal(1)

  const addTaskToList = (e: SubmitEvent) => {
    e.preventDefault();

    if (!input()) return;

    const taskService: TaskPersistenceServiceInterface = new TaskPersistenceService();
    const addTask_: AddTaskInterface = new AddTask(taskService);
    try {
      addTask_.execute(id(), input());

      setTasksStore([...tasksStore, { id: id(), text: input(), completed: false }]);

      setRefresh(true);
      onInput("");
      setId(id() + 1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div class="flex flex-row items-center justify-around">
        <label class="text-xl" for="create-task">Create a task</label>
        <form onsubmit={addTaskToList}>
          <input type="text" id="create-task" class="h-8 rounded-lg"
            onInput={(e) => onInput(e.currentTarget.value)} value={input()} />
          <button class="btn btn-primary" type='submit' >Create</button>
        </form>
      </div >
    </>
  );
};

export default CreateTask;
