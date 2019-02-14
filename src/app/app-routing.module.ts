import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './atividade/add.component';
import { ListComponent } from './atividade/list.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
