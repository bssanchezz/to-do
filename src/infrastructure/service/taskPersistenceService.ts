import TaskObject from "../../domain/taskObject";

export interface TaskPersistenceServiceInterface {
  addTask(id: number, text: string): void;
  toggleTask(id: number): void;
  getTasks(): TaskObject[];
}

export class TaskPersistenceService implements TaskPersistenceServiceInterface {

  addTask(id: number, text: string): void {
    this.setTaskList([...this.getTaklist(), { id, text, completed: false }]);
  }
  toggleTask(id: number): void {
    const listOnStorage = this.getTaklist();
    const toToggle = listOnStorage.find((task: TaskObject) => task.id === id);
    if (toToggle == null) {
      return;
    }
    toToggle.completed = !toToggle.completed;
    this.setTaskList(listOnStorage);
  }
  getTasks = (): TaskObject[] => this.getTaklist();

  setTaskList(taskList: TaskObject[]): void {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }
  getTaklist(): TaskObject[] {
    const listOnStorage = localStorage.getItem('taskList');
    if (listOnStorage === null) {
      return [];
    }
    return JSON.parse(listOnStorage) || [];
  }

}
