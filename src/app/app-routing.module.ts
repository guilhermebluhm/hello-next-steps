import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", redirectTo: "cursos", pathMatch: "full"
  },
  {
    path: 'cursos',
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
