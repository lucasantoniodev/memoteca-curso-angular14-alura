import { Pensamento } from './../models/Thought';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss'],
})
export class ThoughtComponent {
  @Input() pensamentoModel: Pensamento = {
    id: 0,
    autoria: '',
    conteudo: '',
    modelo: '',
  };

  larguraPensamento(): string {
    if (this.pensamentoModel.conteudo.length >= 256) return 'pensamento-g';
    return 'pensamento-p';
  }
}
