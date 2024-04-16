// src/application/taskService.ts
import { createStore } from "solid-js/store";
import TaskObject from '../domain/task';

export function createTaskService() {
  let todoId = 0;
  const [taskList, setTaskList] = createStore<TaskObject[]>([]);

  function addTask(text: string) {
    setTaskList([...taskList, { id: todoId++, text, completed: false }]);
  }

  const toggleTask = (id: number) => {
    setTaskList(
      (task) => task.id === id,
      "completed",
      (completed) => !completed
    );
  };

  function getTasks() {
    return taskList;
  }

  return { addTask, toggleTask, getTasks };
}
