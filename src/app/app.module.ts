import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginGuard } from './modules/login/guards/login.guard';
import { LoginService } from './modules/login/services/login.service';

import { NotFoundModule } from './modules/not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NotFoundModule,
  ],
  providers: [
    LoginGuard, LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
