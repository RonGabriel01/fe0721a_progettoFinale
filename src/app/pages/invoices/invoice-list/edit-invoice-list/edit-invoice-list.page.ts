import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  templateUrl: './edit-invoice-list.page.html',
  styleUrls: ['./edit-invoice-list.page.scss']
})
export class EditInvoiceListPage implements OnInit {
 stato = ['PAGATA','NON PAGATA'];
 id!:any;
 fattura!:any;
  constructor(private router:Router, private route:ActivatedRoute,private invoiceService:InvoiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.invoiceService.getByIdList(this.id).subscribe(ris => {this.fattura = ris, console.log(this.fattura)});
  }

  submitForm(form: NgForm) {
    console.log(form.value);
    this.invoiceService.updateFatturalista(form.value,this.id).subscribe();
    this.router.navigate(['/invoices-list']);
  }

}