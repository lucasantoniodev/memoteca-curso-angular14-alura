import { Pensamento } from './../models/Thought';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss'],
})
export class ThoughtComponent {
  @Input() pensamentoModel: Pensamento = {
    autoria: '',
    conteudo: '',
    modelo: '',
  };
}
