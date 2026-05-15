import { Component } from '@angular/core';
import { AlunoModel } from '../../modelos/aluno';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunosService } from '../../services/alunos.service';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-aluno',
  imports: [FormsModule],
  templateUrl: './aluno.html',
  styleUrl: './aluno.css',
})
export class Aluno {
  id: number = 0;
  aluno: AlunoModel = new AlunoModel();

  constructor(private router: Router, private alunosService: AlunosService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      if (this.id > 0) {
        // Busca assíncrona do aluno na API para edição
        this.alunosService.obterPorId(this.id).subscribe((alunoExistente) => {
          if (alunoExistente) {
            this.aluno = { ...alunoExistente };
          }
        });
      }
    });
  }

  voltar() {
    this.router.navigate(['/alunos'])
  }

  salvar() {
    if (this.aluno.Id) {
      this.alunosService.alterar(this.aluno.Id, this.aluno).subscribe(()=>{
        this.voltar();
      });
    } else {
      this.alunosService.inserir(this.aluno).subscribe(()=>{
        this.voltar();
      });
    }
  }
}
