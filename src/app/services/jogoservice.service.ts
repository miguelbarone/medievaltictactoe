import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class JogoserviceService {

  images: Array<{ url: string, check: string }>;

  vez: number;

  constructor() {
    this.images = [
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined }];

    this.vez = 1;
  }

  jogar(evento) {
    console.log(evento);

    console.log(this.images);
    var id = evento.target.id;

    if (this.images[parseInt(id) - 1].url == "") {
      if (this.vez === 1) {
        console.log("entrei");
        console.log(id);
        this.images[parseInt(id) - 1].url = "1.png";
        this.images[parseInt(id) - 1].check = "x";
        this.vez = 2;
      } else {
        var id = evento.target.id;
        this.images[parseInt(id) - 1].url = "2.png";
        this.images[parseInt(id) - 1].check = "o";
        this.vez = 1;
      }
    }
    console.log(this.images);
    this.verificarFimDeJogo();
    return this.images;
  }

  verificarFimDeJogo() {
    var c1 = this.images[0].check;
    var c2 = this.images[1].check;
    var c3 = this.images[2].check;
    var c4 = this.images[3].check;
    var c5 = this.images[4].check;
    var c6 = this.images[5].check;
    var c7 = this.images[6].check;
    var c8 = this.images[7].check;
    var c9 = this.images[8].check;
    if (this.casasIguais(c1, c2, c3) || this.casasIguais(c4, c5, c6) || this.casasIguais(c7, c8, c9) ||
      this.casasIguais(c1, c4, c7) || this.casasIguais(c2, c5, c8) || this.casasIguais(c3, c6, c9) ||
      this.casasIguais(c1, c5, c9) || this.casasIguais(c3, c5, c7)) {
      {
        if (this.vez == 1) {
          Swal.fire({
            title: 'Seu escudo é sua espada! Que Odin te abençoe, Campeão.',
            background: 'darkgrey url(assets/images/cav2.gif)',
            width: 500,
            padding: '7em'});
          this.limpa();
        } else if (this.vez == 2) {
          Swal.fire({
            title: 'Você esmigalhou seu adversário! \n Continue sua trajetória, Campeão.',
            width: 400,
            padding: '4em',
            background: 'darkgrey url(assets/images/esp.gif)'
          })
          this.limpa();

        }


      }


    } else if (c1 != undefined && c2 != undefined && c3 != undefined && c4 != undefined && c5 != undefined &&
      c6 != undefined && c7 != undefined && c8 != undefined && c9 != undefined) {
      setTimeout(function () { Swal.fire({
        title: 'Vocês guerrearam por igual. \n Fale com o Reset Master para reiniciar a partida.',
        width: 400,
        padding: '4em',
        background: 'darkgrey url(assets/images/fight.gif)'
      }) }, 50);
    }
  }

  casasIguais(a, b, c) {
    console.log(b);
    console.log(c);
    if (a === undefined || b === undefined || c === undefined) {
      return false;
    }
    if ((a === b) && (b === c)) {
      return true;
    } else {
      return false;
    }
  }

  limpa() {
    this.images = [
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined },
      { url: "", check: undefined }];

    this.vez = 1;

  }

  cav1() {
    Swal.fire({
      title: 'Partida Reiniciada. Boa sorte na próxima luta!',
      background: '#000'});
    this.limpa();
    return this.images;
  }
}
