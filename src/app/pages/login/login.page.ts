import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}
  passwordVisible = false;
  errorMessage = undefined;
  user!: any;
  isLoading = false;
  ngOnInit(): void {}

  async submitForm(form: NgForm) {
    try {
      this.isLoading = true;
      await this.auth.login(form.value).toPromise();
      this.user = form.value;
      this.isLoading = false;
      localStorage.setItem('utente', JSON.stringify(this.user));
      this.router.navigate(['/list']);
    } catch (err: any) {
      this.isLoading = false;
      this.errorMessage = err.error.error;
      console.error(err);
    }
  }

  goSignUp() {
    this.router.navigate(['/signup']);
  }
}