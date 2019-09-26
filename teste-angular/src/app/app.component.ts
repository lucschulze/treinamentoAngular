import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  


  public formulario: FormGroup;

  private resource = 'https://jsonplaceholder.typicode.com';
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ){}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'idade': [],
      'endereco' : this.formBuilder.group({
          'rua' : [null, Validators.required],
          'numero' : []
      }),
      'permissoes': this.formBuilder.array(this.permissoes)

    });
  }

  onSubmit(){
    if(this.formulario.invalid){
      const nomeControl = this.formulario.get("nome") as FormControl;
      const idadeControl = this.formulario.get("idade") as FormControl;
      nomeControl.markAsDirty();
      idadeControl.markAsDirty();
      console.log(this.formulario.controls);
    }else{
      console.log(this.formulario.value);
    }
    
  }

  buscarPosts(){
    this.httpClient.get(`${this.resource}/posts`)
    .subscribe((posts:any)=>
      console.log(posts)
    );
  }

  public ultimoBotaoClicado: number;
  public mostrarLinhaCodigo: boolean = true;
  salario: number = 10000;
  public linhasDeCodigo: number[] = [10,20,30,50,10];

  public permissoes: string[] = [
    'admin',
    'moderador'
  ]

  atualizarBotaoClicado(botao : number){
    this.ultimoBotaoClicado = botao;
  }
}
