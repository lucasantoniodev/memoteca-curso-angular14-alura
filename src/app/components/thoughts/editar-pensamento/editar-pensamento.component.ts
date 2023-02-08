import { Router, ActivatedRoute } from '@angular/router';
import { ToughtService } from './../tought.service';
import { Pensamento } from './../models/Thought';
import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.scss'],
})
export class EditarPensamentoComponent {
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

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigateByUrl('/listarPensamento');
    });
  }

  cancelar() {
    this.router.navigateByUrl("/listarPensamento")
  }
}
