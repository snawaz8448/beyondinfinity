import { SharedService } from '../../../shared/shared.service';
import {Component, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserProfileComponent } from '../../auth/user-profile/user-profile.component';
@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss'
})
export class TopnavComponent {
  sidebarData: any;

  constructor(private sharedService: SharedService , public dialog: MatDialog) {}

  
  ngOnInit() {
    this.sharedService.sidebarData$.subscribe(data => {
      if (data) {
        this.sidebarData = data;
      }
    });
  }
  


  openUserProfile(){
    const dialogref = this.dialog.open(UserProfileComponent,{
      height:'100vh',
      width:'30vw',
      position: {
        right: '0',
        top:'0'
      },
        })

  }
}
