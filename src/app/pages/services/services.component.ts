import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log(localStorage.getItem('LocalData')); // Get Local Storage from About us ts file
    console.log(sessionStorage.getItem('SessionData'));   // Get Session Storage from About us ts file
    console.log (JSON.parse((localStorage.getItem('Userid') || '{}')));       // Get Local Storage Value in JSON Format

    // Check Session Storage Value is Available and Not Available
    // if (sessionStorage.length>0) {
    //   alert("Data Available");
    // } else {
    //   alert("Data Not Available");
    // }

    // Check The Local Storage support on window or not
    if(window.localStorage){
      alert("supported");
    }
    else{
      alert("Not supported");
    }
  }

}
