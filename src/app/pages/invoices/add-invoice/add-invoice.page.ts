import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  templateUrl: './add-invoice.page.html',
  styleUrls: ['./add-invoice.page.scss'],
})
export class AddInvoicePage implements OnInit {
  stato = ['PAGATA', 'NON PAGATA'];
  id!: any;

  constructor(
    private invoiceServer: InvoiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  async submitForm(form: NgForm) {
    console.log(form.value);
    let statoId: number;
    if (form.value.stato == 'PAGATA') {
      statoId = 1;
    } else if (form.value.stato == 'NON PAGATA') {
      statoId = 2;
    }
    // console.log(statoId!);

    const newInvoice = JSON.parse(` {
    "data":"${form.value.data}",
    "numero":${form.value.numero},
    "anno":${form.value.anno},
    "importo":${form.value.importo},
    "stato":{
      "id": ${statoId!},
      "nome": "${form.value.stato}"
     }
     ,"cliente":{
        "id":${this.id}
      }
}
  `);

     console.log(newInvoice);

    await this.invoiceServer.addFattura(newInvoice).toPromise();
    this.router.navigate(['/invoice/'+this.id])
  }
}