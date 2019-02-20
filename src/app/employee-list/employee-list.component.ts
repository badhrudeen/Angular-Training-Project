import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent{

  employees: any[];

  selectedRadioButton: string = 'all';

  constructor(private _empService: EmployeeService){
    _empService.getEmployees().subscribe(data=>this.employees = data);
  }

  onEmployeeCountRadioButtonChange(selectionValue){
    this.selectedRadioButton = selectionValue;
  }

  getTotalEmployeeCount(): number{
    return this.employees.length;
  }

  getTotalMaleEmployeeCount(): number{
    return this.employees.filter(e=>e.Gender==="Male").length;
  }

  
  getTotalFemaleEmployeeCount(): number{
    return this.employees.filter(e=>e.Gender==="Female").length;
  }

  

}
