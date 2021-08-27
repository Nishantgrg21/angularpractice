import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  customers: Customer[] = [
 
    {customerNo: 1, name: 'Rahuld Dravid', address: ' Banglaore', city: 'Banglaore', state: 'Karnataka', country: 'India'},
    {customerNo: 2, name: 'Sachin Tendulkar', address: 'Mumbai ', city: 'Mumbai', state: 'Maharastra', country: 'India'},
    {customerNo: 3, name: 'Saurrav Ganguly', address: 'Kolkata', city: 'Kolkata', state: 'West Bengal', country: 'India'},
    {customerNo: 4, name: 'Mahendra Singh Dhoni', address: 'Ranchi', city: 'Ranchi', state: 'Bihar', country: 'India'},
    {customerNo: 5, name: 'Virat Kohli', address: 'Delhi', city: 'Delhi', state: 'Delhi', country: 'India'},
 
  ]

  ngOnInit(): void {
  }

}
