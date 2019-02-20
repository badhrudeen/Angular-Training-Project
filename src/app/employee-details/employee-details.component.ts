import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

 
  employees: any[];

  constructor(private _empService: EmployeeService){
    this.employees = [];
  }

  ngOnInit() {
    this._empService.getEmployees().subscribe(data=>this.employees = data);
  }

}
