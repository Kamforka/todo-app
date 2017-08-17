import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})
export class TodoViewComponent implements OnInit {
  id: number = null;
  todo: Todo = null;
  editTitle = false;

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.getTodoId();
    this.getTodo();
  }

  getTodoId() {
    this.route.params.subscribe(params => this.id = +params['id']);
  }

  getTodo() {
    this.todoService.getTodo(this.id).subscribe((todo: Todo) => this.todo = todo);
  }

  onUpdateTodo() {
    this.todoService.updateTodo(this.id, this.todo)
      .subscribe(
        todo => {
          this.getTodo();
        },
        error => {
          console.log(error);
        }
      );
  }

  onToggleTodo(todo: Todo) {
    todo = Object.assign({}, todo, {
      completed: !todo.completed
    });

    this.todoService.updateTodo(todo.id, todo)
      .subscribe(
        updatedTodo => {
          this.getTodo();
        },
        error => {
          console.log(error);
        });
  }

}
