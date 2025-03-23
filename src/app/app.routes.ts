import { Routes } from '@angular/router';
import { OnboardingComponent } from './modules/auth/onboarding/onboarding.component';
import { SigninComponent } from './modules/auth/signin/signin.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { ResetPasswordComponent } from './modules/auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { PtoComponent } from './modules/admin/PTO/pto/pto.component';

export const routes: Routes = [
    {path:'' , redirectTo:'home' , pathMatch:"full"},
    {path:'onboarding' , component:OnboardingComponent},
    {path:'home', loadComponent:()=>import('./../app/modules/admin/template/template.component').then(m=>m.TemplateComponent),
        children:[
            {path:'' , redirectTo:'dashboard' , pathMatch:'full'} ,
            {path:'dashboard' , component:DashboardComponent},
            {path:'pto' , component:PtoComponent},

        ]
    },
    {path:'signin' , component:SigninComponent},
    {path:'signup' , component:SignupComponent},
    {path:'resetpassword' , component:ResetPasswordComponent},
    {path:'forgotpassword' , component:ForgotPasswordComponent},

];
