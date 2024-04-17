import { createSignal, Component, createResource } from 'solid-js';
import { createStore } from 'solid-js/store';

import Header from './infrastructure/ui/header/CustomHeader';
import CreateTask from './infrastructure/ui/CreateTask';
import TaskList from './infrastructure/ui/TaskList';

import TaskObject from './domain/taskObject';

import { TaskPersistenceServiceInterface, TaskPersistenceService } from './infrastructure/service/taskPersistenceService';
import { GetTaskInterface, GetTasks } from './usecases/getTasks';

const App: Component = () => {

  const [refresh, setRefresh] = createSignal(true);

  const getTasksList = (refresh: boolean): TaskObject[] => {
    if (!refresh) return []
    const taskService: TaskPersistenceServiceInterface = new TaskPersistenceService();
    const getTasks: GetTaskInterface = new GetTasks(taskService);
    setRefresh(false);
    return getTasks.getTasks();
  }

  const [taskResource] = createResource(refresh, getTasksList);
  const [tasksStore, setTasksStore] = createStore(taskResource() ?? []);

  return (
    <div class="prose container mx-auto min-h-full flex flex-column items-center">
      <div class="w-[400px]">
        <Header />
        <CreateTask setRefresh={setRefresh} tasksStore={tasksStore} setTasksStore={setTasksStore} />
        <TaskList setRefresh={setRefresh} tasksStore={tasksStore} setTasksStore={setTasksStore} />
      </div>
    </div >
  );
};

export default App;
