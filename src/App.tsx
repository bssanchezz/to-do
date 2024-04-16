import type { Component } from 'solid-js';
import { createStore } from 'solid-js/store';
import { TaskService } from './usecases/taskServices';
import TaskObject from './domain/task';
import Header from './infrastructure/ui/header/CustomHeader';
import CreateTask from './infrastructure/ui/CreateTask';
import TaskList from './infrastructure/ui/TaskList';

const App: Component = () => {
  const [taskList, setTaskList] = createStore<TaskObject[]>([]);
  const taskService = new TaskService();

  return (
    <div class="prose container mx-auto min-h-full flex flex-column items-center">
      <div class="w-[400px]">
        <Header />
        <CreateTask addTask={taskService.addTask} taskList={taskList} setTaskList={setTaskList}/>
        <TaskList
          taskList={taskService.getTasks(taskList)}
          toggleTask={taskService.toggleTask}
          setTaskList={setTaskList}
        />
      </div>
    </div >
  );
};

export default App;
