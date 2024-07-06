import { Component } from '@angular/core';
import { Employee } from '../../employee';
import { JwtService } from '../../service/jwt.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {

  employees!: Employee[];

  constructor(
     private service: JwtService,
     private router: Router
  ){ }

  ngOnInit():void{
    this.getEmployees();
  }

  private getEmployees(){
    this.service.getEmployeeList().subscribe(data=>{
      this.employees=data;
    })
  }

  employeeDetails(id: number){
    this.router.navigate(['/employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['/update-employee', id]);
  }

  navigateToCreateEmployee() {
    this.router.navigate(['/create-employee']);
  }

  deleteEmployee(id: number){
    this.service.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
}
logout() {
  localStorage.removeItem('jwt'); // Remove JWT from localStorage
  sessionStorage.setItem("Login_Successful", 'false'); // Optional: Set login status to false
  this.router.navigate(['/login']); // Navigate to login page
}
}