import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
    selector: 'component-1',
    templateUrl: "./component-1.component.html"
})

export class Component1{
    @Input()
    public label: string;
    
    @Output()
    public clickSalvar = new EventEmitter();

    constructor(
        private notificationService: NotificationService
    ){}

    salvar(botao: number){
        this.label = "nome - filho";
        this.notificationService.sendNotification(`
        Botão ${botao} foi clicado!
        `);
    }
}