import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  templateUrl: './edit-invoice.page.html',
  styleUrls: ['./edit-invoice.page.scss'],
})
export class EditInvoicePage implements OnInit {
  stato = ['PAGATA', 'NON PAGATA'];
  id!: any;

  constructor(
    private invoiceService: InvoiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async submitForm(form: NgForm) {
    console.log(form.value);
    let statoId: number;
    if (form.value.stato == 'PAGATA') {
      statoId = 1;
    } else if (form.value.stato == 'NON PAGATA') {
      statoId = 2;
    }
    // console.log(statoId!);

    const editedInvoice = JSON.parse(` {
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

    // await this.invoiceService.updateFattura(editedInvoice).toPromise();
    this.router.navigate(['/invoice/' + this.id]);
  }

  ngOnInit(): void {


  }
}