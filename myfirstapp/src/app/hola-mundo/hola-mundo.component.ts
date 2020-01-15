import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {
  
  public title:String;

  constructor() {
    this.title = "Hola Mundo";
  }

  ngOnInit() {
  }

}
