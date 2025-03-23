import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { RouterOutlet } from '@angular/router';
import { TopnavComponent } from "../topnav/topnav.component";
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [SidenavComponent, RouterOutlet, TopnavComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {

}
