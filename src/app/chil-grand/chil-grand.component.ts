import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chil-grand',
  templateUrl: './chil-grand.component.html',
  styleUrls: ['./chil-grand.component.css']
})
export class ChilGrandComponent implements OnInit {
 

  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];

  color = "orange";

  constructor() { }

  ngOnInit() {
  }

    changeColor(input){
	this.color = input.value;
	input.value = ' ';
  }
}
