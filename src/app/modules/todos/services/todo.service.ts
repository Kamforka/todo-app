import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Todo } from '../models/todo';

const API_URL = 'https://5993d631d297ba0011da1ad8.mockapi.io/api/v1';
const API_EP = `${API_URL}/todos`;

@Injectable()
export class TodoService {

  constructor(private http: Http) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get(API_EP)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Get Todos error'));
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get(`${API_EP}/${id}`)
      .map((response: Response) => response.json());
  }

  addTodo(todoValues: Object = {}): Observable<Todo> {
    return this.http.post(API_EP, todoValues)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Add Todo Error'));
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete(`${API_EP}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Delete Todo error'));
  }

  updateTodo(id: number, todo: Todo): Observable<Todo> {
    return this.http.put(`${API_EP}/${id}`, todo)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Update Todo error'));
  }
}
