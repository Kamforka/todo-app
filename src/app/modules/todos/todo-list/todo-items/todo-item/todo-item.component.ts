import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;
  @Output()
  toggleTodo: EventEmitter<Todo> = new EventEmitter();
  @Output()
  deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleTodo(todo: Todo) {
    this.toggleTodo.emit(todo);
  }

  onDeleteTodo(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

}
