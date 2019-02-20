import { Component, OnInit } from '@angular/core';
import { User } from '../../user';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  topicHasError = true;

  userModel = new User('', 'mark@gmail.com',9999, '0','morning', false);

  validateTopic(value){
    if(value ==='default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }

  topics = ["Angular", "HTML", "CSS"];

  OnSubmit(userForm){
    console.log(userForm);
  }

  constructor() { }

  ngOnInit() {
  }

}
