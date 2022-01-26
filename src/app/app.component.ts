import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  todo = '';
  tareas: any[] = [];
  addTodo() {
    if (this.todo != '') {
      this.tareas = [...this.tareas, this.todo]//crea un nuevo array con loque tuviera this.tareas+this.todo
    }
    this.todo = '';
  }
  borrarTarea(index:any) {
    this.tareas.splice(index,1);
    //recorre todo el array y deja solo aquellos diferentes a tareaCompletada
  }
}


