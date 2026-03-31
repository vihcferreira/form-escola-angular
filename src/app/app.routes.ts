import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'alunos', loadComponent: () => import('./alunos/alunos').then(m => m.Alunos) },
    { path: 'alunos/novoAluno', loadComponent: () => import('./alunos/aluno/aluno').then(m => m.Aluno) },
    { path: 'alunos/editarAluno/:id', loadComponent: () => import('./alunos/aluno/aluno').then(m => m.Aluno) }
];