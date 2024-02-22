import TaskList from '../domain/task_list';
import Task from '../domain/task';

export default class TaskService {
  #tasklist: TaskList = new TaskList();

  //Agregar tarea
  addTask(description: string) {
    this.#tasklist.addTask(description);
    console.log(`Tarea Creada con descripción: ${description}`);
  }

  //Muestra lista de tareas
  getAllTasks(): Task[] {
    console.log('Devolviendo lista de tareas');
    return this.#tasklist.getTaskList();
  }

  //Borra tarea según selección desde el índice
  deleteTask(index: number) {
    this.#tasklist.removeTask(index);
    console.log(`Tarea borrada con indice: ${index}`);
  }
  //Marca tarea como completada
  markTaskAsCompleted(index: number) {
    this.#tasklist.markTaskAsCompleted(index);
    console.log(`Tarea marcada como completada con indice: ${index}`);
  }
}
