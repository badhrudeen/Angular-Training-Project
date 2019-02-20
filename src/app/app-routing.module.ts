import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

const routes: Routes = [
{ path:'employees', component: EmployeeListComponent },
{ path: 'departments', component: DepartmentListComponent },
{ path: 'departments/:id', component: DepartmentDetailsComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]    
})
export class AppRoutingModule{

}