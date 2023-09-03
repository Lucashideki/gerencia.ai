import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarDadosComponent } from './backlog/listar-dados/listar-dados.component';
import { AdicionarDadosComponent } from './backlog/adicionar-dados/adicionar-dados.component';
import { AditarDadosComponent } from './backlog/aditar-dados/aditar-dados.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarDadosComponent,
    AdicionarDadosComponent,
    AditarDadosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
