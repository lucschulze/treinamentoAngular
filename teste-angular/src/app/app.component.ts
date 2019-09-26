import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  salario: number = 10000;
  public linhasDeCodigo: number[] = [10,20,30,50,10];
  printBotao(botao : number){
    console.log(`O botão ${botao} foi clicado`);
  }
}
