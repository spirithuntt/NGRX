import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  onSubmit() {
    // Handle login logic here
    console.log('Email:', this.email, 'Password:', this.password);
  }
}
