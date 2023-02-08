import { ActivatedRoute, Router } from '@angular/router';
import { ToughtService } from './../tought.service';
import { Pensamento } from './../models/Thought';
import { Component } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.scss'],
})
export class ExcluirPensamentoComponent {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private readonly service: ToughtService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.service.buscarPorId(parseInt(id)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    this.service
      .excluir(this.pensamento.id)
      .subscribe(() => this.router.navigateByUrl('/listarPensamento'));
  }

  cancelar() {
    this.router.navigateByUrl('/listarPensamento');
  }
}
