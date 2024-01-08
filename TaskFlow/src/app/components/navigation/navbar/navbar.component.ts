import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}
  
  isLoggedIn(): boolean {
    return sessionStorage.getItem('userId') !== null;
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
