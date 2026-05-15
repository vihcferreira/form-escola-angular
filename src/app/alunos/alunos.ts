import { Component } from '@angular/core';
import { AlunoModel } from '../modelos/aluno';
import { Router } from '@angular/router';
import { AlunosService } from '../services/alunos.service';

@Component({
  selector: 'app-alunos',
  imports: [],
  templateUrl: './alunos.html',
  styleUrl: './alunos.css',
})
export class Alunos {
  alunos: Array<AlunoModel> = [];

  constructor(private router: Router, private alunoService: AlunosService) {
    this.obterAlunos();
  }

  ngOnInit(){
    this.obterAlunos();
  }

  novoAluno() {
    this.router.navigate(['/alunos/novoAluno'])
  }

  editarAluno(aluno: AlunoModel) {
    this.router.navigate(['/alunos/editarAluno', aluno.Id])
  }

  excluirAluno(aluno: AlunoModel) {
    if (aluno.Id) {
      this.alunoService.deletar(aluno.Id).subscribe(() => {
        this.obterAlunos();
      });
    }
  }

  obterAlunos() {
    this.alunoService.listar().subscribe((dadosApi) => {
      this.alunos = dadosApi;
    });
  }
}
