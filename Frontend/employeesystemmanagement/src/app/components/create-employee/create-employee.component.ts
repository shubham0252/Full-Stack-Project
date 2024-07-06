import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../../service/jwt.service';
import { Employee } from '../../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private service: JwtService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.service.createEmployee(this.employee).subscribe(
      (data) => {
        console.log('Employee created successfully:', data);
        this.goToEmployeeList();
      },
      (error) => {
        console.error('Error creating employee:', error);
      }
    );
  }

  goToEmployeeList(){
    this.router.navigate(['/employee']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}