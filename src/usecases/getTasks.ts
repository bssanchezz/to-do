import TaskObject from "../domain/taskObject";
import { TaskPersistenceServiceInterface } from "../infrastructure/service/taskPersistenceService";

export interface GetTaskInterface {
  getTasks(): TaskObject[];
}

export class GetTasks implements GetTaskInterface {
  private taskService: TaskPersistenceServiceInterface;

  constructor(taskService: TaskPersistenceServiceInterface) {
    this.taskService = taskService;
  }

  getTasks(): TaskObject[] {
    return this.taskService.getTasks();
  }
}
