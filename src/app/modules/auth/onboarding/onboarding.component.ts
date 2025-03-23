import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { NotificationService } from '../../../shared/notification.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatCheckboxModule, MatInputModule, MatButtonModule, RouterModule ,MatSelectModule ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss'
})
export class OnboardingComponent {
  onboardingForm!:FormGroup;


  constructor(private fb: FormBuilder, private authService:AuthService , private router:Router ,  private noificationService:NotificationService) {

  this.onboardingForm = this.fb.group({
    companyName: ['', Validators.required],
    registrationNo: [''],
    companyAddress: ['', Validators.required],
    surveyPackage: ['', Validators.required],
    standard: ['']
  });
}

  surveyPackages = ['Basic', 'Advanced', 'Premium'];


}
