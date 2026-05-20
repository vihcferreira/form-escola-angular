import { Component, computed, signal } from '@angular/core';
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
  alunos = signal<AlunoModel[]>([]);

  total = computed(() => this.alunos().length);

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
        this.alunos.update(lista => lista.filter(a => a.Id !== aluno.Id));
      });
    }
  }

  obterAlunos() {
    this.alunoService.listar().subscribe((dadosApi) => {
      this.alunos.set(dadosApi);
    });
  }
}
