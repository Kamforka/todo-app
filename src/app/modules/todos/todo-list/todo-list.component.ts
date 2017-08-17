import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = null;
  todoTitle = '';
  todoColors = ['yellow', 'blue', 'green', 'white'];
  todoColor = this.todoColors[0];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos()
      .subscribe(
        todos => this.todos = todos,
        error => console.log(error));
  }

  onAddTodo($event) {
    const todoValues = Object.assign({}, {
      title: this.todoTitle,
      content: '',
      createdAt: new Date(Date.now())
    });
    this.todoService.addTodo(todoValues)
      .subscribe(
        response => {
          this.getTodos();
        },
        error => {
          console.log(error);
        });
    this.todoTitle = '';
  }

  onDeleteTodo(id: number) {
    if (confirm('Delete for sure?')) {
      this.todoService.deleteTodo(id)
        .subscribe(
          todo => {
            this.getTodos();
          },
          error => {
            console.log(error);
          });
    }
  }

  onToggleTodo(todo: Todo) {
    todo = Object.assign({}, todo, {
      completed: !todo.completed
    });

    this.todoService.updateTodo(todo.id, todo)
      .subscribe(
        updatedTodo => {
          this.getTodos();
        },
        error => {
          console.log(error);
        });
  }

  onColorPick(color: string) {
    this.todoColor = color;
  }

}
