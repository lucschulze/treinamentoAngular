import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1 } from './components/component-1/component-1.component';
import { PrintDirective } from './directives/print.directive';
import { ComponentNotification } from './components/component-notification/component-notification.component';
import { NotificationService } from './service/notification.service';
import { Notification } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    Component1,
    PrintDirective,
    ComponentNotification
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
