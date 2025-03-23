import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../../shared/shared.service';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  currentUser:any;
  Modules:any=[];

  allModules = [
    { name: 'Dashboard', icon: 'fa-solid fa-grip', routerLink: '/home/dashboard' },
    { name: 'Pto', icon: 'fa-solid fa-file', routerLink: '/home/pto' },
    { name: 'Permiting', icon: 'fa-solid fa-file-signature', routerLink: '/dashboar' },
    { name: 'Team', icon: 'fa-solid fa-users', routerLink: '/dashboar' },
    { name: 'Client', icon: 'fa-regular fa-film', routerLink: '/dashboar' },
    { name: 'Entry', icon: 'fa-brands fa-slack', routerLink: '/dashboar' },
    { name: 'Order', icon: 'fa-solid fa-users', routerLink: '/dashboar' },
  ];

  constructor(
    private router: Router,
    private authService:AuthService,
    private cd:ChangeDetectorRef,
    private sharedService: SharedService
   ){}


   sendData(name:string) {
    this.sharedService.updateSidebarData(name);
  }


}
