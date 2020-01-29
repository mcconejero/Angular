import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonasServiceService {

  private urlPersonas:string = "http://localhost/AJAX/APIS/Personas/servidor.php";

  constructor(private http: HttpClient) { }

  listar(){
    let pa = JSON.stringify({
      servicio: "listar"
    });
    return this.http.post<any>(this.urlPersonas, pa);
  }

  create(persona){
    let pa = JSON.stringify({
      servicio: "insertar",
      id: persona.id,
      dni: persona.dni,
      nombre: persona.nombre,
      apellidos: persona.apellidos
    });
    return this.http.post<any>(this.urlPersonas, pa);
  }

  update(persona){
    let pa = JSON.stringify({
      servicio: "modificar",
      id: persona.id,
      dni: persona.dni,
      nombre: persona.nombre,
      apellidos: persona.apellidos
    });
    return this.http.post<any>(this.urlPersonas, pa);
  }

  delete(idPersona){
    let pa = JSON.stringify({
      servicio: "borrar",
      id: idPersona
    });
    return this.http.post<any>(this.urlPersonas, pa);
  }

  SelPersona(idPersona){
    let pa = JSON.stringify({
      servicio: "selPersonaID",
      id: idPersona
    });
    return this.http.post<any>(this.urlPersonas, pa);
  }

}
