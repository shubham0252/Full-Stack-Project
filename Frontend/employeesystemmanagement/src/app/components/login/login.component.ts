import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../service/jwt.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm?: FormGroup;

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', new  FormControl (Validators.required, Validators.email)],
      password: ['', new FormControl (Validators.required)]
    })
  }

  submitForm(){
    this.service.login(this.loginForm?.value).subscribe(
      (response) => {
        console.log(response);
        if (response.jwt != null ){
          localStorage.setItem('jwt', response.jwt); 
          alert ("Login_Successful" + " " + response.jwt);
          this.router.navigate(['/employee']);
        }
      },
      (error) => {
        console.error('Login failed', error);
      }
    )
  }
  logout(): void {
    // Perform any necessary cleanup or token removal here
    localStorage.removeItem('jwt');
     // For example, if you store the token in localStorage
  }
}
