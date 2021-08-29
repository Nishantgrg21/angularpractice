import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  title= 'Template driven forms';

  constructor() { }
  
  onSubmit(myForm: { value: any; }) {
    console.log(myForm.value);
  }

  ngOnInit(): void {
  }

 

}
