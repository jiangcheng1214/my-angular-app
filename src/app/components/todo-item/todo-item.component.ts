import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  setClass() {
    let classes = {
      todo: true,
      "is-completed": this.todo.completed,
    }
    return classes;
  }

  onToggle(todo:Todo) {
    console.log("onToggle(todo:Todo)")
    this.todo.completed = !this.todo.completed

    this.todoService.toggleCompleted(todo).subscribe(todo => 
      console.log(`updated: ${JSON.stringify(todo)}`)
    )
  }

  onDelete(todo:Todo) {
    console.log("onDelete(todo:Todo)")
    this.deleteTodo.emit(todo)
  }
}
