import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name = "Nishant Garg";
  public message  = "Wecome to ntmy website using pipes";
  public person = {"firstname": "nishant" , "lastname": "garg"};
  public date = new Date();

}
