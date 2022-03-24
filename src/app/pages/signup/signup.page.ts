import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {

  constructor(private auth: AuthService,private router: Router) { }
  role=['user','admin'];
  errorMessage = undefined;
  isLoading = false;

  ngOnInit(): void {

  }

  async submitForm(form: NgForm) {
    try {
    this.isLoading = true;
    console.log(form.value);
    await this.auth.signUp(form.value).toPromise();
    form.reset();
    this.errorMessage=undefined;
    this.router.navigate(['/login']);
    }
    catch (err:any) {
      this.isLoading = false;
      this.errorMessage = err.error.error
      console.error(err);
    }
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

}