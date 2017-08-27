import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss'],
  animations: [
    trigger('todoAnimation', [
      transition('* => *', [
        // hides everything by default
        query(':enter', style({ opacity: 0 }), { optional: true }),

        // starts animation with stagger between elements
        query(':enter', stagger('100ms', [
          animate('1s', style({ opacity: 1 }))
        ]), { optional: true }),

        query(':leave',
          animate('1s ease', style({ opacity: 0, transform: 'translateY(-100%)' })),
          { optional: true }),
      ])
    ]),
  ]
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

  onDeleteTodo(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

}
