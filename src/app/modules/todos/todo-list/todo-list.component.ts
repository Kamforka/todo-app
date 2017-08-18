import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';
import { ColorPickerOption } from '../color-picker/color-picker-option';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = null;
  todoColors: ColorPickerOption[] = [
    { color: 'yellow' }, { color: 'blue' },
    { color: 'green' }, { color: 'white' },
  ];

  todoColor: ColorPickerOption = this.todoColors[0];

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

  onAddTodo(todo: Todo) {
    this.todoService.addTodo(todo)
      .subscribe(
        response => {
          this.getTodos();
        },
        error => {
          console.log(error);
        });
  }

  onDeleteTodo(todo: Todo) {
    if (confirm('Delete for sure?')) {
      this.todoService.deleteTodo(todo)
        .subscribe(
          response => {
            this.getTodos();
          },
          error => {
            console.log(error);
          });
    }
  }

  onToggleTodo(todo: Todo) {
    this.todoService.toggleTodo(todo)
      .subscribe(
        updatedTodo => {
          this.getTodos();
        },
        error => {
          console.log(error);
        });
  }

  onColorPick(colorPickerOption: ColorPickerOption) {
    this.todoColor = colorPickerOption;
  }

}
