import TaskObject from "../domain/taskObject";
import { TaskService } from "../infrastructure/service/taskServices";

export interface ToggleTaskInterface {
  toggleTask(id: number, setTaskList: (task: (task: TaskObject) => boolean, text: string, completed: (prevCompleted: boolean) => boolean) => void): void;
}

export class ToggleTask implements ToggleTaskInterface {
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  toggleTask(id: number, setTaskList: (task: (task: TaskObject) => boolean, text: string, completed: (prevCompleted: boolean) => boolean) => void): void {
    this.taskService.toggleTask(
      id,
      setTaskList
    );
  }
}
