import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  public ultimoBotaoClicado: number;
  public mostrarLinhaCodigo: boolean = true;
  salario: number = 10000;
  public linhasDeCodigo: number[] = [10,20,30,50,10];
  atualizarBotaoClicado(botao : number){
    this.ultimoBotaoClicado = botao;
  }
}
