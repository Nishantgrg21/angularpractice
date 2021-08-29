import { Component, OnInit } from '@angular/core';

import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  


  public name = "Nishant Garg";
  public message  = "Wecome to ntmy website using pipes";
  public person = {"firstname": "nishant" , "lastname": "garg"};
  public date = new Date();


  // create a varialble for hold the service data 
  msg!:string;

// create a object of service 
  constructor (private _testServiceService:TestServiceService){

  }

  
  ngOnInit(): void {
    this.msg = this._testServiceService.getMessage();
  }

}
