import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  templateUrl: './invoice-list.page.html',
  styleUrls: ['./invoice-list.page.scss']
})
export class InvoiceListPage implements OnInit {
fatture!:any;
page:number = 0;
  constructor(private invoiceService:InvoiceService,private router:Router) { }

  ngOnInit(): void {
    this.getInvoiceList();
  }

  getInvoiceList() {
    this.invoiceService.getAll(this.page).subscribe(
      ris => {
        this.fatture = ris;
      }
     );
  }

  goToEditInvoice(id :number) {
    this.router.navigate(['/edit-invoice-list/'+id]);
  }


  cambiaPagina(param: string) {
    if (param == '+') {
      this.page++;
    } else if (param == '-') {
      this.page--;
    }
  this.getInvoiceList();
  }
}