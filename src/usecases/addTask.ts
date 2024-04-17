import TaskObject from "../domain/taskObject";
import { TaskPersistenceServiceInterface } from "../infrastructure/service/taskPersistenceService";

export interface AddTaskInterface {
  execute(id: number, text: string): void;
}

export class AddTask implements AddTaskInterface {
  private taskService: TaskPersistenceServiceInterface;

  constructor(taskService: TaskPersistenceServiceInterface) {
    this.taskService = taskService;
  }

  execute(id: number, text: string): void {
    this.taskService.addTask(id, text);
  }
}
