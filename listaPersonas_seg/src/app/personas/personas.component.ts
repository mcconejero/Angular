import { Component, OnInit } from '@angular/core';
import { PersonasServiceService } from "../personas-service.service";
import { Persona } from "../interfaces/persona";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  private list: any;
  private newPer: Persona;
  private buttonText = "Añadir";
  private personaId: any;

  constructor(private service: PersonasServiceService, private route: ActivatedRoute, private ruta: Router) {
    this.newPer = { id: -1, dni: "", nombre: "", apellidos: "" };
  }

  ngOnInit() {
    this.personaId = this.route.snapshot.params["id"];
    if (this.personaId == -1) {
      this.buttonText = "Añadir";
    } else {
      this.buttonText = "Modificar";
      this.service.SelPersona(this.personaId).subscribe(object => {
        this.newPer = object;
      })
    }

  }

  create() {
    if (this.buttonText == "Añadir") {
      this.service.create(this.newPer).subscribe(datas => {
        this.list = datas;
      });
    } else {
      this.service.update(this.newPer).subscribe(datas => {
        this.list = datas;
      });
    }
    this.ruta.navigate(["/"]);
  }

}
