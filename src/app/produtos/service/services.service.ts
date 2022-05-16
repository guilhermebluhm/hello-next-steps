import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { produtoModel } from '../model/produto-model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private readonly API = "api/produto/listar"

  listarTodos() {

    return this.httpClient.get<produtoModel[]>(this.API)
    .pipe(delay(2000));
    
    //operador take(1) do rxjs usado apenas para casos de chamadas
    //http que nao contenham fluxo de dados fazer uma unica chamada
    //na colecao e encerrar o fluxo

    //o operador first tambem sendo util somente para casos de nao haver
    //fluxo de dados ou situacoes em que e conveniente apenas a primeira chamada

  }

  saveNewRecord(record: produtoModel){

    //passado via referencia de form pelo formGroup em value dos elementos por bind

    return this.httpClient.post(this.API,record)

  }

  constructor(private httpClient: HttpClient) { }
}
