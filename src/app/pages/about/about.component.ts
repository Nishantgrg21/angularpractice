import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let obj = {fname:"nishant", lname:"garg"}

    localStorage.setItem('Userid', JSON.stringify(obj));       // Set Local Storage Value in JSON format
    console.log (JSON.parse((localStorage.getItem('Userid') || '{}')));       // Get Local Storage Value in JSON Format

    
    //localStorage.setItem('UserData', 'Nishant Garg ');   // Set Local Storage Value 
    localStorage.setItem('EmployeeData', 'Ram Singh  ');    // Set Local Storage Value 
    sessionStorage.setItem('SessionData', 'SessionStorage');     // Set Session Storage Value


    // localStorage.removeItem('LocalData');     // Remove the localStorage
    // localStorage.clear();        // Remove all the localstorage value 

    //console.log(localStorage.getItem('UserData'));       // Get Local Storage Value
   console.log(localStorage.getItem('EmployeeData'));       // Get Local Storage Value
   // console.log(sessionStorage.getItem('SessionData'));   // Get Session Storage Value

    
  }

}
