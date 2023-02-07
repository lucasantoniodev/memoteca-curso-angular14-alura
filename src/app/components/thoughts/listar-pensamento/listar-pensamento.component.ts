import { Pensamento } from './../models/Thought';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss'],
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [
    {
      conteudo: 'Passo informações para um componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2',
    },
    {
      conteudo:
        'MnFZFM62amdAtyIyGUTPW2TtBkU3qxtz8k2oVbAMao5xblgzyvm8ZxlPWAqOHeUtFG3OsDcC5GJyQvVWviRzaYjngslN35lS8TKqkAMuE2Eggwm1cmLv2poPpybS6NcrjyvXZpraQbceeRmFWhRYhKdzOgbsWYKXBnqHM3DZH1YKL78c7csDz5dx1OT85JCYKV3YoHVM95mpdQkmmHGn2ssld6SPn6c6O4InmWtgwPnxmnHgeAcMG0sD1DiYf6JT',
      autoria: '256 Caracters',
      modelo: 'modelo2',
    },
  ];
  constructor() {}
}
