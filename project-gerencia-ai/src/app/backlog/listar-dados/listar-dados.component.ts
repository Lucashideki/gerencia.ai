import { Component, OnInit } from '@angular/core';
import { BacklogService } from 'src/app/backlog.service';

@Component({
  selector: 'app-listar-dados',
  templateUrl: './listar-dados.component.html',
  styleUrls: ['./listar-dados.component.sass']
})

export class ListarDadosComponent implements OnInit {
  dados: any[] = [];
  
  constructor (private BacklogService: BacklogService){}
  ngOnInit(): void {
    this.BacklogService.getDados().subscribe((dados) => {
      this.dados = dados;
    });
  }
}
