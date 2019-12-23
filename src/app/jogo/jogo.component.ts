import { Component } from '@angular/core';
import {  JogoserviceService } from '../services/jogoservice.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent{

  images: Array<{ url: string, check: string}>;
  
  constructor(private jogoService: JogoserviceService) {}

  jogar(evento) {
    this.images = this.jogoService.jogar(evento);
  }

  cav1() {
    this.images = this.jogoService.cav1();
  }
}