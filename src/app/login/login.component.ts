import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  user = { email: '', password: '' };

  constructor(private api: ApiService, private router: Router) {}

  login() {
    this.api.login(this.user).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/tasks']);
    });
  }
}
