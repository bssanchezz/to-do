// src/application/taskService.ts
import { taskService } from '../infrastructure/service/taskService';

export function taskServices() {
  const { addTask, toggleTask, getTasks } = taskService();

  function serviceAddTask(text: string) {
    return addTask(text);
  }

  function serviceToggleTask(id: number) {
    return toggleTask(id);
  }

  function serviceGetTasks() {
    return getTasks();
  }

  return { serviceAddTask, serviceToggleTask, serviceGetTasks };
}
