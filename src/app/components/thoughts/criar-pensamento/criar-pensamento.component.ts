import { ToughtService } from './../tought.service';
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
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor(
    private readonly _router: Router,
    private readonly toughtservice: ToughtService
  ) {}

  ngOnInit(): void {}

  criarPensamento() {
    try {
      alert('Novo pensamento criado!');
      this.toughtservice.criar(this.pensamento).subscribe();
      this._router.navigateByUrl('/listarPensamento');
    } catch (error) {
      console.log(error);
    }
  }

  cancelar() {
    this._router.navigateByUrl('/listarPensamento');
  }
}
