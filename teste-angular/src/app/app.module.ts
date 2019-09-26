import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Component1 } from './components/component-1/component-1.component';
import { PrintDirective } from './directives/print.directive';
import { ComponentNotification } from './components/component-notification/component-notification.component';
import { NotificationService } from './service/notification.service';
import { arrayToStringPipe } from './pipes/array-to-string.pipe';
import { CommonModule } from '@angular/common';
import{ FormsModule, ReactiveFormsModule} from '@angular/forms'




@NgModule({
  declarations: [
    AppComponent,
    Component1,
    PrintDirective,
    ComponentNotification,
    arrayToStringPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NotificationService,
    arrayToStringPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
