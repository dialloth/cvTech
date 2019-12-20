import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() filsproperty;

  constructor() { }

  ngOnInit() {
  	console.log(this.filsproperty);
  }

  weatherType = 'ensoleillé';
  refresh() {
    this.weatherType = 'pluvieux';
    

  
  }
}
