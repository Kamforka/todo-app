import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})

export class TodoInputComponent implements OnInit {

  todo: Todo = { title: '' };

  @Output()
  addTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddTodo() {
    this.addTodo.emit(this.todo);
    this.todo = { title: '' };
  }

}
