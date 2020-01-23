import { Component, OnInit } from '@angular/core';
import { PersonasServiceService } from "../personas-service.service";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  public data: any = null;
  public list: Object[];
  public accion;
  public nuevaPersona = {id: "", dni: "", nombre: "", apellidos: ""};

  constructor(private service: PersonasServiceService) {
    this.service.listar().subscribe(datas => {
      this.data = datas;
      this.list = this.data;
    });

    this.accion = { id: 1, nombre: "Añadir", indice: -1 }
  }

  update(persona) {
    this.accion = { id: 2, nombre: "Modificar", indice: persona.id };
    this.nuevaPersona = {id: persona.id, dni: persona.dni, nombre: persona.nombre, apellidos: persona.apellidos}
  }

  create(){
    if(this.accion.id == 1)
    this.service.create(this.nuevaPersona).subscribe(datas => {
      this.data = datas;
      this.list = this.data;
    });
    else{
      this.service.update(this.nuevaPersona).subscribe(datas => {
        this.data = datas;
        this.list = this.data;
      });
      this.nuevaPersona = {id: "", dni: "", nombre: "", apellidos: ""};
      this.accion = { id: 1, nombre: "Añadir", indice: -1 }
    }
  }

  delete(index:string){
    this.service.delete(index).subscribe(datas => {
      this.data = datas;
      this.list = this.data;
    });
  }

  ngOnInit() { }

}
