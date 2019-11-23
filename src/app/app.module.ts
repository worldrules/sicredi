import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ChatModule } from './chat/chat.module';



@NgModule({
  declarations: [
    AppComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
