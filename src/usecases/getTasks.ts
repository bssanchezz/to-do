import TaskObject from "../domain/task";
import { TaskService } from "../infrastructure/service/taskServices";

export interface GetTaskInterface {
  getTasks(taskList: TaskObject[]): TaskObject[];
}

export class GetTasks implements GetTaskInterface {
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  getTasks(taskList: TaskObject[]): TaskObject[] {
    return this.taskService.getTasks(taskList);
  }
}
