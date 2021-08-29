import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-fom',
  templateUrl: './reactive-fom.component.html',
  styleUrls: ['./reactive-fom.component.css']
})
export class ReactiveFomComponent implements OnInit {

    
// Step -1 -> Add form module in app.module.ts file
// Step -2 - > go to template file create a form and give a formGroup Name 
// Step -3 -> give same formGroup name as in the template
// Step4 - > add formControlName to all input field
// step-5 -> inject the form builder in the constructor in ts file
// Step -6 -> add ngSubmit in template and call the ngSubmit method in ts file


  myForm!: FormGroup; // Step -3 -> give same formGroup name as in the template

// step-5 -> inject the form builder in the constructor in ts file
  constructor(private formBuilder: FormBuilder) { 

    /*
    // This form is whithout validation
    this.myForm = formBuilder.group({   // Step 6 -> building the form using formBuilder
      username: new FormControl(),     /// in the formBuilder -> we are creating a formgroup elements
      email: new FormControl(),        // these should be same as template name
      mobnumber: new FormControl()
    });
    */




// With validation

// step1-> add validator in formbuilder
//step2-> add some css for handing the errors
//step3-> disabled the submit button in template
// step 4-> custom field validation in tempalte and add a message in tempalte we use span tag for display error messages in form
// step 5 -> Add multiple Validators in email
    this.myForm = formBuilder.group({   
      username: ['', Validators.required],
      email:      ['',[ Validators.required, Validators.email]],
      mobnumber:  ['', Validators.required]
    });



  }


  // Step -6 -> add ngSubmit in template and call the ngSubmit method in ts file
  sendData(){
    console.log(this.myForm);  // print the comple form 
    console.log(this.myForm.value);  // print the all values means show all values we are filled
    console.log(this.myForm.value.email); // show the only email value
  }


  ngOnInit(): void {
  }







}
