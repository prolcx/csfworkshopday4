import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms'
import { Registration } from '../models/register';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  form : FormGroup;
  todoArray: FormArray;
  result=[]
  
  priorityData = [
    { id: 1, name: 'High' },
    { id: 2, name: 'Medium'},
    { id: 3, name: 'Low'}
  ];

  resultArray =[];

  get priorityFormArray() {
    return this.form.controls.priority as FormArray;
  }

  private addPriorityCheckboxes() {
    this.priorityData.forEach(() => this.priorityFormArray.push(new FormControl(false)));
  }
  

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      description: fb.control('', [Validators.required]),
      priority: new FormArray([]),
      due: fb.control(new Date(), [Validators.requiredTrue])
    });
    this.addPriorityCheckboxes();
    this.todoArray = fb.array([]);
   }

  

  ngOnInit(): void {
  }

  
  processForm() {
    console.log( this.form.value)
    const array = this.result.push(this.form.value)
    console.log(array)
  }

}
