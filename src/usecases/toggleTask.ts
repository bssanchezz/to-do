import TaskObject from "../domain/taskObject";
import { TaskPersistenceServiceInterface } from "../infrastructure/service/taskPersistenceService";

export interface ToggleTaskInterface {
  toggleTask(id: number): void;
}

export class ToggleTask implements ToggleTaskInterface {
  private taskService: TaskPersistenceServiceInterface;

  constructor(taskService: TaskPersistenceServiceInterface) {
    this.taskService = taskService;
  }

  toggleTask(id: number): void {
    this.taskService.toggleTask(id);
  }
}
