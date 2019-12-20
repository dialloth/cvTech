import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

personnes: Personne[];
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne( 1, 'Diallo', 'billo', 33, 'maphoto.jpg', 77777, 'développer'),
      
    ];
  }

}
