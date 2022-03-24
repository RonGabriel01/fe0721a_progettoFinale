import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comune } from 'src/app/models/comune';
import { Provincia } from 'src/app/models/provincia';
import { ClientService } from 'src/app/service/client.service';

@Component({
  templateUrl: './edit-client.page.html',
  styleUrls: ['./edit-client.page.scss']
})
export class EditClientPage implements OnInit {
  tipiClienti!: [];
  province!: Provincia[];
  comuni!: Comune[];
  cliente!:any;
  id!:any;
  constructor(private clientService: ClientService,private route: ActivatedRoute,private router: Router) { }

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
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.clientService.getById(this.id).subscribe(ris => this.cliente = ris);
  }



  submitForm(form: NgForm) {
    console.log(form.value);
    this.clientService.updateCliente(form.value,this.id).subscribe();
    this.router.navigate(['/clients']);
  }
}