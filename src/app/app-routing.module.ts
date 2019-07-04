import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch :'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
  path:'connexion',
  component : ConnexionComponent
  },
  {
    path : 'inscription',
    component : InscriptionComponent
  },
  {
    path : 'deconnexion',
    component : DeconnexionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
