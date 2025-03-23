import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { RouterOutlet } from '@angular/router';
import { TopnavComponent } from "../topnav/topnav.component";

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [SidenavComponent, RouterOutlet, TopnavComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {

}
