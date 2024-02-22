import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import TaskService from '../application/task-service';
import Task from '../domain/task';

export class ExpressAdapter {
  #app;
  #port: number = 3000;
  #taskService: TaskService;
  constructor() {
    this.#app = express();
    this.#app.use(bodyParser.json());
    this.#taskService = new TaskService();
  }

  initialize() {
    this.#app.post('/task', (req: Request, res: Response) => {
      const description: string = req.query.description as string;
      this.#taskService.addTask(description);
      res.json({ success: true });
    });
    //Mostrar todas las tareas
    this.#app.get('/tasks', (req: Request, res: Response) => {
      res.json({ tasks: this.#taskService.getAllTasks() });
    });
    //Borrar tarea
    this.#app.delete('/task/:index', (req: Request, res: Response) => {
      const index: number = +req.params.index;
      this.#taskService.deleteTask(index);
      res.json({ success: true });
    });
    //Marcar tarea como completada
    this.#app.put('/task/:index/completed', (req: Request, res: Response) => {
      const index: number = +req.params.index;
      this.#taskService.markTaskAsCompleted(index);
      res.json({ success: true });
    });

    this.#app.listen(this.#port, () => {
      console.log(`Server is running at http://localhost:${this.#port}`);
    });
  }
}
