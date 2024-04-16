import { TaskServiceInterface } from "../domain/taskInterface";
import TaskObject from "../domain/task";

export class TaskService implements TaskServiceInterface {
  addTask(id: number, text: string, taskList: TaskObject[], setTaskList: (taskList: TaskObject[]) => void): void {
    setTaskList([...taskList, { id, text, completed: false }]);
  }

  toggleTask(id: number, setTaskList: (task: any, text: string, completed: any) => void): void {
    setTaskList(
      (task) => task.id === id,
      "completed",
      (completed) => !completed
    );
  }

  getTasks(taskList: TaskObject[]): TaskObject[] {
    return taskList;
  }
}
