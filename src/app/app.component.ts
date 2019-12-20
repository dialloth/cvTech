import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'dciss';
   age:number = 25;
   name: string = "Thierno Diallo";
    bgColor='violet';
    show = true;
    

changeStatus(){
	this.show = !this.show;
}


}
