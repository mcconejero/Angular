import { Component, OnInit, ɵConsole } from "@angular/core";

@Component({
  selector: "app-hobbit-component",
  templateUrl: "./hobbit-component.component.html",
  styleUrls: ["./hobbit-component.component.css"]
})
export class HobbitComponentComponent implements OnInit {
  private list: string[];
  private newName: string;
  private accion;
  private gHobbit;

  constructor() {
    this.list = ["Bilbo Bolsón", "Sam Gamyi", "Frodo Bolsón", "Pippin Paladín", "Merry Brandigamo", "Rosita Coto"];
    this.accion = { id: 1, nombre: "Añadir", indice: -1 }
    this.gHobbit = "";
  }

  ngOnInit() {
  }

  createHobbit(index) {
    if (index < 0) {
      this.list.push(this.gHobbit);
    }
    
    if (index >= 0){
      this.list[index] = this.gHobbit;
      this.accion = { id: 1, nombre: "Añadir", indice: -1 };
    }
  }

  removeHobbit(index) {
    this.list.splice((index), 1);
  }

  editHobbit(nombre) {
    var index = this.list.indexOf(nombre);
    this.accion = { id: 2, nombre: "Modificar", indice: index };
    this.gHobbit = nombre;
  }

}
