import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TodoRifComponent } from './todo-rif/todo-rif.component';
import { TodoAjoutComponent } from './todo-ajout/todo-ajout.component';
import { TodoModifComponent } from './todo-modif/todo-modif.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    DeconnexionComponent,
    InscriptionComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TodoRifComponent,
    TodoAjoutComponent,
    TodoModifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
