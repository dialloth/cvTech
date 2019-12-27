import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Personne} from '../../../Model/Personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {

  @Input() personnes: Personne[];
  @Output() selectedPersonne = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }

  selectPersonne(selectedPersonne){
    this.selectedPersonne.emit(
     selectedPersonne
    );
  }

}