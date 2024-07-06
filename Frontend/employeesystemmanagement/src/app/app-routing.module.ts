import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { authGuard } from './auth.guard';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "employee", component: ListEmployeeComponent, canActivate: [authGuard]},
  {path: "create-employee", component: CreateEmployeeComponent, canActivate: [authGuard]},
  {path: "update-employee/:id", component: UpdateEmployeeComponent, canActivate: [authGuard]},
  {path: "employee-details/:id", component: EmployeeDetailsComponent, canActivate: [authGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: '', redirectTo: 'employee', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
