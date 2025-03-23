import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { NotificationService } from '../../../shared/notification.service';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatCheckboxModule, MatInputModule, MatButtonModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {


  signUpForm!:FormGroup;
  isSigninLoading:boolean=false;
  slides = document.querySelector('.slides') as HTMLElement;
  currentIndex = 0;
  
  constructor(private fb: FormBuilder, private authService:AuthService , private router:Router ,  private noificationService:NotificationService) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstname: ['', [Validators.required, Validators.minLength(6)]],
      lastname: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngAfterViewInit(){
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % 3;
      const slides = document.querySelector('.slides') as HTMLElement;
      slides.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }, 2000);
  }


  onSubmit() {
    if (this.signUpForm.valid) {
      this.isSigninLoading=true
      this.authService.SignIn(this.signUpForm.value).subscribe((res:any)=>{
        this.isSigninLoading=false
        if (res) {
          localStorage.setItem('authToken' , res?.token)
          let user = JSON.stringify(res?.user)
          localStorage.setItem('currentUser' , user);
        };

      },
      (error: { error: { message: any; }; })=>{
        debugger
        this.isSigninLoading=false
        this.noificationService.showError('error' , error.error.message)

      }
    
    )
    } else {
      this.isSigninLoading=false
      // Optionally handle the case when the form is invalid
      console.log('Form is invalid');
    }
  }



}
