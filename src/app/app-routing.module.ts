import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanghaComponent } from './sangha/sangha.component';

const routes: Routes = [
  {path: 'sangha', component: SanghaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
