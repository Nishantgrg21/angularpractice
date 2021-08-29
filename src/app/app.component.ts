import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudOperationService } from './crud-operation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[],
})
export class AppComponent {
  title = 'myapp';

  filterTerm!: string; // Add a ng2-search Filter

  dataFetch: any = [];

  constructor(private user : CrudOperationService){
  this.user.getData().subscribe(data=>{
  console.log(data);
  this.dataFetch = data;
})
  }








  
}
