import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../service/jwt.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  form?: FormGroup;

  constructor(
    private service: JwtService,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['',new FormControl ([Validators.required])],
      email: ['',new FormControl ([Validators.required])],
      password: ['',new FormControl ([Validators.required])],
      confirmPassword: ['',new FormControl ([Validators.required])],
    }, { validator: this.passwordMathValidator }) 
  }

  passwordMathValidator(formGroup: FormGroup){
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password != confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({passwordMismatch : true})
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  submitForm() {
    console.log(this.form!.value);
    this.service.register(this.form!.value).subscribe(
      (response) => {
        if (response.id != null){
          alert("Registed Successfull!" + " " + response.name);
        }
      }
    )
  }
}
