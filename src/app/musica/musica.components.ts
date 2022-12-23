import { Component, OnInit, Input } from '@angular/core';
import { IRegistrazione } from '../musica';
import { MUSICA } from './lista-musica-components';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-musica',
  templateUrl: './lista-musica-components.html',
  styleUrls: ['./lista-musica-components.css'],
})
export class MusicaComponent {
  musica = MUSICA;

  testo: string = '';

  mostraImmagine = false;

  cambiaImmagine() {
    this.mostraImmagine = !this.mostraImmagine;
  }
}
