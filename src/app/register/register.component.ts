import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  user = { name: '', email: '', password: '' };

  constructor(private api: ApiService, private router: Router) {}

  register() {
    this.api.register(this.user).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
