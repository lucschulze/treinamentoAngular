import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
    selector: 'notifications',
    template: ''
})
export class ComponentNotification implements OnInit, OnDestroy{

    private notificationSubscription : Subscription;

    constructor(
        private notificationService: NotificationService
    ){
        
    }
    
    ngOnInit(){
        this.notificationSubscription = 
        this.notificationService.getObservable().subscribe((message:string) => {
            this.showAlert(message);
        });
    }

    ngOnDestroy(){
        this.notificationSubscription.unsubscribe();
    }

    showAlert(text:string){
        alert(text);
    }
}