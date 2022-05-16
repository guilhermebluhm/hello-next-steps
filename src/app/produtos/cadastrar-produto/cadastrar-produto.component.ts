import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  formulario : FormGroup

    // formBuilder disponibilizado atraves do import do module em root de ReactiveForm
    // formGroup se dado pelo dataSource em forms por [formGroup] que e feito o bind
    // pelo formControlName pelo D.I. no construtor do objeto do model no group({})

  constructor(private roteamento: Router, 
    private rotaAtual : ActivatedRoute,
    private montarForm : FormBuilder,
    private serv: ServicesService,
    private snackBar: MatSnackBar) {

      // Router classe que tem o papel de fazer o roteamento dos endpoints da aplicacao
      // ActivedRoute que atraves de this.instancia pega a referencia da localizacao do endpoint

      this.formulario = this.montarForm.group({
        descricao: [null],
        serialNo: [null],
        valor: [null]
      })

    }

  // usando snackBar por D.I. para tratar o erro ao dar o subscribe ao persistir o registro
  // requer para sintaxe e => {acao snack bar}
  
  acaoSalvar(){
    this.serv.saveNewRecord(this.formulario.value).subscribe(x => console.log(x), e => {
      this.snackBar.open('erro ao salvar','',{duration: 3000})
    })
  }

  retornarRaiz(){
    this.roteamento.navigate([''],{relativeTo: this.rotaAtual})
  }

  ngOnInit(): void {
  }

}
