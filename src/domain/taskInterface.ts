import TaskObject from "./task";

export interface TaskServiceInterface {
  addTask(id: number, text: string, taskList: TaskObject[], setTaskList: (taskList: TaskObject[]) => void): void;
  toggleTask(id: number, setTaskList: (task: (task: TaskObject) => boolean, text: string, completed: (prevCompleted: boolean) => boolean) => void): void;
  getTasks(taskList: TaskObject[]): TaskObject[];
}
