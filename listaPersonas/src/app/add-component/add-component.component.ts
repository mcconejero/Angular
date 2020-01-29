import { Component, OnInit } from '@angular/core';
import { PersonasServiceService } from "../personas-service.service";
import { Persona } from "../interfaces/persona";
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponent implements OnInit {

  private list: any;
  private newPer: Persona;

  constructor(private service: PersonasServiceService, private ruta: Router) {
    this.newPer = {id: 0, dni: "", nombre: "", apellidos: ""}
  }

  ngOnInit() {
  }

  create() {
      this.service.create(this.newPer).subscribe(datas => {
        this.list = datas;
      });
    this.ruta.navigate(["/"]);
  }

}
