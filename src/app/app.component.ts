import { Component } from '@angular/core';
declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  public toggleTitle(){
  	console.log("le has dado click");
  	$('.title').slideToggle();
  }
}
