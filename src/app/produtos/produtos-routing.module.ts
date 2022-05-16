import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

const routes: Routes = [
  {
    path: "", component: ListaProdutosComponent
  },
  {
    path: "novo-produto", component: CadastrarProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
