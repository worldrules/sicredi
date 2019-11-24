import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { EscolaComponent } from './escola/escola.component';
import { GeralComponent } from './escola/geral/geral.component';
import { IndicesComponent } from './escola/indices/indices.component';
import { ComentariosComponent } from './escola/comentarios/comentarios.component';
import { ContatoComponent } from './escola/contato/contato.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ResultadoComponent,
    EscolaComponent,
    GeralComponent,
    IndicesComponent,
    ComentariosComponent,
    ContatoComponent,
    OnboardingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
