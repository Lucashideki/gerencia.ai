import { Routes } from "@angular/router";
import { ListarDadosComponent } from "./backlog/listar-dados/listar-dados.component";
import { AdicionarDadosComponent } from "./backlog/adicionar-dados/adicionar-dados.component";
import { AditarDadosComponent } from "./backlog/aditar-dados/aditar-dados.component"


const routes: Routes =[
    {path: 'adicionar-dados', component: AdicionarDadosComponent},
    {path: 'editar-dados', component: AditarDadosComponent},
    {path: 'listar-dados', component:ListarDadosComponent },
    {path: '', redirectTo: '/listar-dados', pathMatch: 'full'},
]

export class AppRoutingModule {
    
}