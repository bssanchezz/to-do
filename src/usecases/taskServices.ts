import { TaskServiceInterface } from "../domain/taskInterface";
import TaskObject from "../domain/task";

export class TaskService implements TaskServiceInterface {
  addTask(id: number, text: string, taskList: TaskObject[], setTaskList: (taskList: TaskObject[]) => void): void {
    setTaskList([...taskList, { id, text, completed: false }]);
  }

  toggleTask(id: number, setTaskList: (task: (task: TaskObject) => boolean, text: string, completed: (prevCompleted: boolean) => boolean) => void): void {
    setTaskList(
      (task: TaskObject) => task.id === id,
      "completed",
      (completed: boolean) => !completed
    );
  }

  getTasks(taskList: TaskObject[]): TaskObject[] {
    return taskList;
  }
}
