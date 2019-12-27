import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../../Model/Personne';
@Component({
  selector: 'app-detailc-v',
  templateUrl: './detailc-v.component.html',
  styleUrls: ['./detailc-v.component.css']
})
export class DetailcVComponent implements OnInit {
  @Input() personne: Personne;
  constructor() { }

  ngOnInit() {
  }

}
