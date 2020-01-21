import { Component, OnInit } from "@angular/core";
import { AjaxService } from "../ajax.service";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"]
})
export class ListaComponent implements OnInit {
  public data: any = null;
  public list: Object[];
  public planestData: Object = null;

  constructor(private service: AjaxService) {
    this.service.peticion().subscribe(datas => {
      console.log(datas);
      this.asignarDatos(datas);
    });
  }

  ngOnInit() {}

  private asignarDatos(dats: Object) {
    this.data = dats;
    this.list = this.data.results;
  }

  next() {
    console.log(this.data.next);
    this.service.peticionDir(this.data.next).subscribe(datas => {
      this.asignarDatos(datas);
    });
  }

  prev() {
    this.service.peticionDir(this.data.previous).subscribe(datas => {
      this.asignarDatos(datas);
    });
  }
}
