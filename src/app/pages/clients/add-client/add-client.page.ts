import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
import { Comune } from 'src/app/models/comune';
import { Provincia } from 'src/app/models/provincia';

@Component({
  templateUrl: './add-clients.page.html',
  styleUrls: ['./add-client.page.scss'],
})
export class AddClientPage implements OnInit {
  tipiClienti!: [];
  province!: Provincia[];
  comuni!: Comune[];

  form!: FormGroup;
  constructor(
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientService.getTipiClienti().subscribe(
      (ris) => (this.tipiClienti = ris)
      // console.log(this.tipiClienti);
    );
    this.clientService.getComuni().subscribe(
      (ris) => (this.comuni = ris.content)
      // console.log(this.Province.content);
    );
    this.clientService.getProvince().subscribe(
      (ris) => (this.province = ris.content)
      // console.log(this.Comuni.content);
    );
  }


  async submitForm(form: NgForm) {
    try {
      console.log("form value:", form.value);
      await this.clientService.addCliente(form.value).toPromise();
      form.reset();
      this.router.navigate(['/clients']);
    } catch (err: any) {
      console.error(err);
    }
  }
}