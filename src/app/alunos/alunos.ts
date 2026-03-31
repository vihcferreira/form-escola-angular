import { Component } from '@angular/core';
import { AlunoModel } from '../modelos/aluno';
import { Router } from '@angular/router';
import { Servico } from './servico';

@Component({
  selector: 'app-alunos',
  imports: [],
  templateUrl: './alunos.html',
  styleUrl: './alunos.css',
})
export class Alunos {
  alunos: Array<AlunoModel> = [];

  constructor(private router: Router, private servico: Servico) {
    this.obterAlunos();
  }

  novoAluno() {
    this.router.navigate(['/alunos/novoAluno'])
  }

  editarAluno(aluno: AlunoModel) {
    this.router.navigate(['/alunos/editarAluno', aluno.Id])
  }

  excluirAluno(aluno: AlunoModel) {
    this.servico.excluirAluno(aluno.Id!);
    this.obterAlunos();
  }

  obterAlunos() {
    this.alunos = this.servico.obterAlunos();
  }
}
