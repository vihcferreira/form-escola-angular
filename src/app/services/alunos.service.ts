import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AlunoModel } from '../modelos/aluno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private http = inject(HttpClient);
  private url = 'https://localhost:7152/api/aluno';

  listar(): Observable<AlunoModel[]>{
    return this.http.get<AlunoModel[]>(this.url);
  }

  obterPorId(id: number): Observable<AlunoModel> {
    return this.http.get<AlunoModel>(`${this.url}/${id}`);
  }

  inserir(aluno: AlunoModel): Observable<AlunoModel> {
    return this.http.post<AlunoModel>(this.url, aluno);
  }

  alterar(id: number, aluno: AlunoModel): Observable<AlunoModel>{
    return this.http.put<AlunoModel>(`${this.url}/${id}`, aluno);
  }

  deletar(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
