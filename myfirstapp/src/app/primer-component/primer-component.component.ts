import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primer-component',
  templateUrl: './primer-component.component.html',
  styleUrls: ['./primer-component.component.css']
})
export class PrimerComponentComponent implements OnInit {
  @Input() nombreComponent;

  constructor() { }

  ngOnInit() {
  }

}
