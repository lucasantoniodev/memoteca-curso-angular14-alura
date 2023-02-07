import { Pensamento } from './../models/Thought';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  criarPensamento() {}

  cancelar() {
    this._router.navigateByUrl('/listarPensamento');
  }
}
