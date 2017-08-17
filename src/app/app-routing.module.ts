import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './modules/login/guards/login.guard';

const routes: Routes = [
  { path: 'login', loadChildren: 'app/modules/login/login.module#LoginModule' },
  { path: 'todos', loadChildren: 'app/modules/todos/todos.module#TodosModule', canActivate: [LoginGuard] },
  { path: '', redirectTo: '/todos' , pathMatch: 'full', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
