import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class TestServiceService {

  constructor() { }

//we can create a many function and values in service file
  // Any method create in services 
  getMessage(){
    return "Hey Service";
  }
}
