import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { EquipeComponent } from './equipe/equipe.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: '',   redirectTo: '/equipes', pathMatch: 'full' },
  { path: 'equipes', component: EquipeComponent },
  { path: 'addEquipe', component: AddEquipeComponent },
  { path: 'students', component: StudentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
