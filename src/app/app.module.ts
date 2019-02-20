// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// User define Module
import { AppRoutingModule } from './app-routing.module';

// pipes
import { TitlePipe } from './title.pipe';
import { EmployeeTitlePipe } from './employee-title.pipe';

// services
import { EmployeeService } from './employee.service';
import { AuthService} from './auth.service';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    EmployeeListComponent,
    TitlePipe,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    EmployeeDetailsComponent,
    DepartmentListComponent,
    LoginComponent,
    RegisterComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
