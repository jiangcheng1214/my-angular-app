import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  ttl:string;
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo= {
      title: this.ttl,
      completed: false,
    }
    console.log(`onSubmit ${JSON.stringify(todo)}`);
    this.addTodo.emit(todo)
  }

}
