import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
    selector: 'notifications',
    template: ''
})
export class ComponentNotification implements OnInit, OnDestroy{

    constructor(
        private notificationService: NotificationService
    ){
        
    }
    
    ngOnInit(){
        this.notificationService.getObservable().subscribe((message:string) => {
            this.showAlert(message);
        });
    }

    ngOnDestroy(){

    }

    showAlert(text:string){
        alert(text);
    }
}