import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  utenti!: any;
  page:number = 0;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.authService.getAll(this.page).subscribe((ris) => {
      this.utenti = ris;
    });
  }

  cambiaPagina(param: string) {
    if (param == '+') {
      this.page++;
    } else if (param == '-') {
      this.page--;
    }
  this.getUsers();
  }
}