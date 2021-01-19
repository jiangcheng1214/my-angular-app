import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo'
import { TodoService } from 'src/app/services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[]

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodoEvent(todo:Todo) {
    console.log("delete me")
    this.todos = this.todos.filter(t => t.id != todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodoEvent(todo:Todo) {
    console.log("add me")
    this.todoService.addTodo(todo).subscribe(todo => this.todos.push(todo));
  }

}