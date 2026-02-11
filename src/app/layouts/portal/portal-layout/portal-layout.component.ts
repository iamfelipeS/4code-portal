import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portal-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './portal-layout.component.html',
  styleUrl: './portal-layout.component.scss'
})
export class PortalLayoutComponent {
  menuOpen = false;

  get isMobile(): boolean {
    return window.matchMedia('(max-width: 767px)').matches;
  }
}
