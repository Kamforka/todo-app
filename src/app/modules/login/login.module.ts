import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    LoginRoutingModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginPageComponent],
  providers: [LoginService]
})
export class LoginModule { }
