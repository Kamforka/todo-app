import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdIconModule, MdInputModule, MdListModule, MdTooltipModule } from '@angular/material';

import { TodoService } from './services/todo.service';
import { TodosRoutingModule } from './todos-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdTooltipModule,
    TodosRoutingModule,
  ],
  declarations: [
    TodoListComponent,
    TodoViewComponent,
    TruncatePipe,
  ],
  providers: [
    TodoService,
  ],
})
export class TodosModule { }
