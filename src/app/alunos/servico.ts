import { Injectable } from '@angular/core';
import { AlunoModel } from '../modelos/aluno';

@Injectable({
  providedIn: 'root',
})
export class Servico {
  alunos: Array<AlunoModel> = [];

  obterAlunos() {
    return this.alunos;
  }

  obterPorId(id: number) {
    return this.alunos.find(aluno => aluno.Id === id);
  }

  inserirAluno(aluno: AlunoModel) {
    aluno.Id = this.alunos.length + 1;
    this.alunos.push(aluno);
  }

  excluirAluno(id: number) {
    var index = this.alunos.findIndex(aluno => aluno.Id === id);
    this.alunos.splice(index, 1);
  }

  atualizarAluno(aluno: AlunoModel): void {
    var index = this.alunos.findIndex(a => a.Id === aluno.Id);
    if (index !== -1) {
      this.alunos[index] = aluno;
    }
  }
}
