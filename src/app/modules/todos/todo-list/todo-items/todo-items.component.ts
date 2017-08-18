import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit {

  @Input()
  todos: Todo[];
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

  onDeletTodo(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

}
