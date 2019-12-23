import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  @Output() jogar = new EventEmitter();

  constructor() { }

  ngOnInit() {
    Swal.fire({
      title: 'Clique em um dos Dragoes para entrar na taverna do Elfo Eunuco.',
      width: 500,
      padding: '2.3em',
      background: '#fff url(assets/images/drag3.gif)'
    })


  }
  abrirJogo() {
    this.jogar.emit();
    var nome = prompt('Se apresente, estranho! Qual o seu nome?');

    setTimeout(function () {
      Swal.fire({
        title: 'Seja bem-vindo a Taverna do Elfo Eunuco, ' + nome + '! Entre e desfrute conosco!',
        width: 600,
        padding: '10em',
        background: '#fff url(assets/images/tav1.gif)'
      });
    }, 400);
  }
}
