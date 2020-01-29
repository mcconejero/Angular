import { Component, OnInit } from '@angular/core';
import { PersonasServiceService } from "../personas-service.service";
import { Persona } from "../interfaces/persona";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public list: Persona[];

  constructor(private service: PersonasServiceService) {
    this.service.listar().subscribe(datas => {
      this.list = datas;
    });
  }

  ngOnInit() {
    this.service.listar().subscribe(datas => {
      this.list = datas;
    });
   }

  delete(persona) {
    var opcion = confirm("¿Desea eliminar a " + persona.nombre + "?");
    if (opcion) {
      this.service.delete(persona.id).subscribe(datas => {
        this.list = datas;
      });
    }
  }

}
