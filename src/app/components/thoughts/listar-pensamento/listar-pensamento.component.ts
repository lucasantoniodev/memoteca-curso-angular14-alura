import { ToughtService } from './../tought.service';
import { Pensamento } from './../models/Thought';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss'],
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [];
  constructor(private readonly service: ToughtService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    });
  }
}
