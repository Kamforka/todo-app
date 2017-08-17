import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoViewComponent } from './todo-view/todo-view.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: ':id', component: TodoViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
