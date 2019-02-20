import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  selectedRadioButton: string = 'all';

  @Output()
  radioButtonSelectionChanged = new EventEmitter();

  @Input()
  all: number;

  @Input()
  male: number;

  @Input()
  female: number;

  OnRadioButtonChanged(){
    this.radioButtonSelectionChanged.emit(this.selectedRadioButton);
    console.log(this.selectedRadioButton);
  }

  constructor() { }

  ngOnInit() {
  }

}
