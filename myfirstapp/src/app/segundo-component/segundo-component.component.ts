import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-component',
  templateUrl: './segundo-component.component.html',
  styleUrls: ['./segundo-component.component.css']
})
export class SegundoComponentComponent implements OnInit {

  titulico = "Que bueno que viniste";
  arrayCosas = new Array("Pan", " Lentejas", " Quinoa", " Pilotes");

  ngOnInit() {
  }

}
