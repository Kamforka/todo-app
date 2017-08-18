import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../../environments/environment';

import { Todo } from '../models/todo';

const API_EP = `${environment.apiUrl}/todos`;

@Injectable()
export class TodoService {

  constructor(private http: Http) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get(API_EP)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getTodo(todoId: number): Observable<Todo> {
    return this.http.get(`${API_EP}/${todoId}`)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  addTodo(todo: Todo): Observable<Todo> {
    todo = Object.assign(todo, {
      completed: false,
      content: '',
      createdAt: new Date(Date.now()),
    });

    return this.http.post(API_EP, todo)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete(`${API_EP}/${todo.id}`)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put(`${API_EP}/${todo.id}`, todo)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  toggleTodo(todo: Todo) {
    todo = Object.assign(todo, { completed: !todo.completed });
    return this.updateTodo(todo);
  }

  private handleError(error: Response | any) {
    console.error('TodoService::handleError', error);
    return Observable.throw(error);
  }
}
