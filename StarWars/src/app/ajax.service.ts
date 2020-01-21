import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  private urlPersonajes:string = "https://swapi.co/api/people/?format=json";

  constructor(private http: HttpClient) { }

  peticion(){
    return this.http.get(this.urlPersonajes);
  }

  peticionDir(url){
    return this.http.get(url);
  }
}
