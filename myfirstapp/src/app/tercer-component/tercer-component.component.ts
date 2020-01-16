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

  private opciones: Array<Object>;
  private opSel:Object = null;

  constructor() {
    this.mostrar = true;
    this.datos = {nombre:"", apellido:"", estatura:0, fnacimiento:new Date()}
    this.opciones = [
      {id: 1, nombre: "Opcion 1"},
      {id: 2, nombre: "Opcion 2"},
      {id: 3, nombre: "Opcion 3"},
      {id: 4, nombre: "Opcion 4"},
      {id: 5, nombre: "Opcion 5"}
    ]
  }

  ngOnInit() {
  }

  enviar() {
    alert("Aqui enviamos el formulario");
  }

  limpiar() {
    this.datos = {nombre: "", apellido: "", estatura:0, fnacimiento: new Date()}
  }

  seleccion(args:any) {

  }

}
