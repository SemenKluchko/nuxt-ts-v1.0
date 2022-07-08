
import {  Module, Mutation, VuexModule } from 'vuex-module-decorators'
import Cookies from 'js-cookie'

export type item = { id: number, completed: boolean, title: string };
export type itemsArr = item[];


@Module({
  name: 'todo',
  namespaced: true,
  stateFactory: true,
})
export default class Todo extends VuexModule {
  tasks: itemsArr = [
  ];



  @Mutation
  addTask(newTitle: string): void {
    this.tasks.push({
      id: Date.now(),
      title: newTitle,
      completed: false,
    });
    Cookies.set('tasks', JSON.stringify(this.tasks))
  }

  @Mutation
  deleteTask(taskId: number): void {
    const currentTask: number = this.tasks.findIndex((el) => el.id === taskId);
    this.tasks.splice(currentTask, 1);
    Cookies.set('tasks', JSON.stringify(this.tasks))
  }

  @Mutation
  initTasks(): void {
    const cookies: string | undefined = Cookies.get('tasks');
   if (cookies) {
    this.tasks = JSON.parse(cookies)
   }
  }

  @Mutation
  toggleTask(taskId: number): void {
    const currentTask: item | undefined = this.tasks.find((el) => el.id === taskId);
    if (currentTask) {
         currentTask.completed = !currentTask.completed;
    }
  }


}


