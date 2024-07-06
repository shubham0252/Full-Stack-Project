import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../employee';
import { JwtService } from '../../service/jwt.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  id!: number
  employee: Employee = new Employee(); 

  constructor(private route: ActivatedRoute, private service: JwtService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.service.getEmployeeById(this.id).subscribe(data => {
      this.employee = data; // Assign API response to employee object
    }, error => {
      console.error('Error fetching employee details:', error);
    });
  }
}
