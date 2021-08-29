import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudOperationService } from './crud-operation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  dataFetch: any = [];

  constructor(private user : CrudOperationService){
  this.user.getData().subscribe(data=>{
  console.log(data);
  this.dataFetch = data;
})
  }
}
