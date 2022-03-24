import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  clienti!: any;
  page: number = 0;
  constructor(
    private clientService: ClientService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientService.getAll(this.page).subscribe((ris) => {
      this.clienti = ris;
    });
  }

  onDelete(id: number) {
    this.clientService.deleteCliente(id).subscribe();
    setTimeout(() => {
      this.getClients();
    }, 100);
  }

  goInvoice(id: any) {
    this.router.navigate(['/invoice/' + id]);
  }

  goEditClient(id:any) {
    this.router.navigate(['/edit-client/'+id]);
  }

  newClient() {
    this.router.navigate(['/add-client']);
  }

  cambiaPagina(param: string) {
    if (param == '+') {
      this.page++;
    } else if (param == '-') {
      this.page--;
    }
  this.getClients();
  }
}