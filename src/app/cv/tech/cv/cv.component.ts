import { Component, OnInit } from '@angular/core';
import {Personne} from '../../../Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

personnes: Personne[];
selectedPersonne: Personne;
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne( 1, 'Diallo', 'Thierno', 30, 'maphoto.jpg', 77777, 'développer'),
      new Personne( 2, 'Barry', 'Aissatou', 23, 'tal.jpg', 77777, 'chanteuse'),
    ];
  }
  selectPersonne(personne){
    this.selectedPersonne = personne;
  }

}
