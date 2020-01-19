import { Component, OnInit, ɵConsole } from "@angular/core";
import { Hobbit } from "../models/hobbit";

@Component({
  selector: "app-hobbit-component",
  templateUrl: "./hobbit-component.component.html",
  styleUrls: ["./hobbit-component.component.css"]
})
export class HobbitComponentComponent implements OnInit {
  private list: Array<Hobbit> = [];
  private newName: string;

  constructor() {
  }

  ngOnInit() {
  }

  createHobbit() {
    let newHobbit = new Hobbit();
    newHobbit.nombre = this.newName;
    this.list.push(newHobbit);
  }

  removeHobbit(index){
    this.list.splice((index), 1);
  }

  getHobbit(index){
    document.getElementById("inputUpdate").innerHTML = this.list[index].nombre;
    console.log(document.getElementById("inputUpdate").innerHTML);
  }

  updateHobbit(hobbitName: string){

  }
}
