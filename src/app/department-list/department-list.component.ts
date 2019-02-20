import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id":1, "name": "Admin"},
    {"id":2, "name": "Sales"},
    {"id":3, "name": "Puchase"},
    {"id":4, "name": "Manager"}
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDepartmentClicked(department){
    this.router.navigate(['/departments', department.id]);
  }

}
