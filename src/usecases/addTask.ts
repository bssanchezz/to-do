import TaskObject from "../domain/taskObject";
import { TaskService } from "../infrastructure/service/taskServices";

export interface addTaskInterface {
  addTask(id: number, text: string, taskList: TaskObject[], setTaskList: (taskList: TaskObject[]) => void): void;
}

export class AddTask implements addTaskInterface {
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  addTask(id: number, text: string, taskList: TaskObject[], setTaskList: (taskList: TaskObject[]) => void): void {
    this.taskService.addTask(id, text, taskList, setTaskList);
  }
}
