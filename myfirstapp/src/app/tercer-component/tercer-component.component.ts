import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tercer-component',
  templateUrl: './tercer-component.component.html',
  styleUrls: ['./tercer-component.component.css']
})
export class TercerComponentComponent implements OnInit {

  public mostrar: boolean;

  private datos: {
    nombre: string;
    apellido: string;
    estatura: number;
    fnacimiento: Date
  }

  constructor() {
    this.mostrar = true;
    this.datos = {nombre:"", apellido:"", estatura:0, fnacimiento:new Date()}
  }

  ngOnInit() {
  }

  enviar() {
    alert("Aqui enviamos el formulario");
  }

  limpiar() {
    this.datos = {nombre: "", apellido: "", estatura:0, fnacimiento: new Date()}
  }

}
