import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {
  fatture!:any;
  id!: any;
  constructor(
    private invoiceService: InvoiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getInvoices();
  }
  getInvoices() {
    this.invoiceService
    .getById(this.id)
    .subscribe((ris) => {
      this.fatture = ris;
    });
  }

  goAddInvoice() {
    this.router.navigate(['/add-invoice/'+this.id]);
  }

  goEditInvoice() {
    this.router.navigate(['/edit-invoice/'+this.id]);
  }

  onDelete(id: number) {
    this.invoiceService.deleteInvoice(id).subscribe();
    setTimeout(() => {
      this.getInvoices();
    }, 200);
  }
}