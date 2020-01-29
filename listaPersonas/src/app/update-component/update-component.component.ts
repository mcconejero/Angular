import { Component, OnInit } from '@angular/core';
import { PersonasServiceService } from '../personas-service.service';
import { Persona } from '../interfaces/persona';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponent implements OnInit {

  private list: any;
  private newPer: Persona;
  private personaId: any;

  constructor(private service: PersonasServiceService, private route: ActivatedRoute, private ruta: Router) {
    this.newPer = { id: -1, dni: "", nombre: "", apellidos: "" };
  }

  ngOnInit() {
    this.personaId = this.route.snapshot.params["id"];
      this.service.SelPersona(this.personaId).subscribe(object => {
        this.newPer = object;
      })
    }

  update() {
      this.service.update(this.newPer).subscribe(datas => {
        this.list = datas;
      });
    this.ruta.navigate(["/"]);
  }

}
