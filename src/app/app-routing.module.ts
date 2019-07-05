import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TodoRifComponent } from './todo-rif/todo-rif.component';
import { TodoAjoutComponent } from './todo-ajout/todo-ajout.component';
import { TodoModifComponent } from './todo-modif/todo-modif.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'connexion',
    component: ConnexionComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: 'todo-rif',
    component: TodoRifComponent
  },
  {
    path: 'todo-ajout',
    component: TodoAjoutComponent
  },
  {
    path: 'todo-modif',
    component: TodoModifComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
