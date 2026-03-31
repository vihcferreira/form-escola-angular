import { Component } from '@angular/core';
import { AlunoModel } from '../../modelos/aluno';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Servico } from '../servico';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-aluno',
  imports: [FormsModule],
  templateUrl: './aluno.html',
  styleUrl: './aluno.css',
})
export class Aluno {
  id:number = 0;

  constructor(private router: Router, private servico: Servico, private route: ActivatedRoute) { 
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      if (this.id > 0) {
        const alunoExistente = this.servico.obterPorId(this.id);
        if (alunoExistente) {
           this.aluno = { ...alunoExistente };
        }
      }
    });
  }

  aluno: AlunoModel = new AlunoModel()

  voltar() {
    this.router.navigate(['/alunos'])
  }

  salvar() {
    if (this.aluno.Id) {
      this.servico.atualizarAluno(this.aluno);
      this.voltar();
    } else {
      this.servico.inserirAluno(this.aluno);
      this.voltar();
    }
  }
}
