import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChilAComponent } from './chil-a/chil-a.component';
import { ChilBComponent } from './chil-b/chil-b.component';
import { ChilGrandComponent } from './chil-grand/chil-grand.component';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cv/tech/cv/cv.component';
import { ListeCvComponent } from './cv/tech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cv/tech/item-cv/item-cv.component';
import { DetailcVComponent } from './cv/tech/detailc-v/detailc-v.component';

@NgModule({
  declarations: [
    AppComponent,
    ChilAComponent,
    ChilBComponent,
    ChilGrandComponent,
    FilsComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailcVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
