import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrComponent } from '../err/err.component';
import { produtoModel } from '../model/produto-model';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent {

  displayedColumns = ["id","descricao","serialNo","valor","acoes"]

  listaTableProdutos : Observable<produtoModel[]>;

  constructor(private service : ServicesService, public dialog: MatDialog,
    private roteamento: Router, private rotaAtual : ActivatedRoute) { 

    // se possivel sempre evitar o subscribe e lidar com dataSource
    // angular faz o cast dinamicamente tanto para array de dados quanto
    // para observable

    this.listaTableProdutos = this.service.listarTodos().pipe(
      catchError(x => {
        console.log(x)
        this.loadOnError("impossivel carregar produtos")
        return of([])
      })
    );
   }

   criarNovoProduto(){
     this.roteamento.navigate(['novo-produto'],{relativeTo: this.rotaAtual})
   }

   loadOnError(err : string) {
    this.dialog.open(ErrComponent, {
      data: err
    });
  }
}
