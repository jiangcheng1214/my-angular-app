import { Injectable } from '@angular/core';
import { fromEventPattern, Observable } from 'rxjs';
import { Todo } from '../models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http' 

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl = "https://jsonplaceholder.typicode.com/todos";
  todoLimit = "?_limit=4";

  constructor(private http:HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoUrl}${this.todoLimit}`);
  }

  toggleCompleted(todo: Todo): Observable<Todo> {
    const url = `${this.todoUrl}/${todo.id}`
    return this.http.put<Todo>(url, todo, httpOptions);
  }

  deleteTodo(todo:Todo): Observable<Todo> {
    const url = `${this.todoUrl}/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions);
  }

  addTodo(todo:Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoUrl, todo, httpOptions)
  }
}
