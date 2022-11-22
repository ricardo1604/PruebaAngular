import { Component } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent {


  edad: number;

  constructor() {
    this.edad = 15;
  }

  ngOnInit(): void {
    console.log('Componente mi-componente cargado')
  }

  aumentarEdad() {
    this.edad++;
    console.log('AUMENTAR');
  }

  disminuirEdad() {
    this.edad--;
    console.log('DISMINUIR');
  }

}
