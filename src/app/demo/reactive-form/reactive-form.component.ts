import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  description: string = '';
  name: string ='';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(200)])]
    })
   }

   addPost(){
    this.post = this.rForm.value;
    //this.name = 
    //this.description = post.description;
    console.log(this.post);
   }

   

  ngOnInit() {
  }

}
