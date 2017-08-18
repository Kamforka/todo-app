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
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { TodoInputComponent } from './todo-list/todo-input/todo-input.component';
import { TodoItemsComponent } from './todo-list/todo-items/todo-items.component';
import { TodoItemComponent } from './todo-list/todo-items/todo-item/todo-item.component';

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
    ColorPickerComponent,
    TodoInputComponent,
    TodoItemsComponent,
    TodoItemComponent,
  ],
  providers: [
    TodoService,
  ],
})
export class TodosModule { }
