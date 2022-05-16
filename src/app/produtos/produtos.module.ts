import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrComponent } from './err/err.component';
import {MatButtonModule} from '@angular/material/button';
import { PipePipe } from './pipes/pipe.pipe';
import { MatIconModule } from '@angular/material/icon';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';



@NgModule({
  declarations: [
    ListaProdutosComponent,
    ErrComponent,
    PipePipe,
    CadastrarProdutoComponent,
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ProdutosModule { }
