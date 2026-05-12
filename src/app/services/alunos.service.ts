import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AlunoModel } from '../modelos/aluno';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private http = inject(HttpClient);
  private url = 'https://localhost:7152/api/aluno';

  listar() {
    return this.http.get<AlunoModel[]>(this.url);
  }

  obterPorId(id: number) {
    return this.http.get<AlunoModel>(`${this.url}/${id}`);
  }

  alterar(id: number, aluno: AlunoModel){
    return this.http.put<AlunoModel>(`${this.url}/${id}`, aluno);
  }

  deletar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
