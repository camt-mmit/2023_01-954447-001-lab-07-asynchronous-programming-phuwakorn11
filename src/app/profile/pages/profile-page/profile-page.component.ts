import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterLinkActive, RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {

}
