import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guard/auth.guard';
import { AddClientPage } from '../pages/clients/add-client/add-client.page';
import { ClientsPage } from '../pages/clients/clients.page';
import { EditClientPage } from '../pages/clients/edit-client/edit-client.page';
import { AddInvoicePage } from '../pages/invoices/add-invoice/add-invoice.page';
import { EditInvoicePage } from '../pages/invoices/edit-invoice/edit-invoice.page';
import { EditInvoiceListPage } from '../pages/invoices/invoice-list/edit-invoice-list/edit-invoice-list.page';
import { InvoiceListPage } from '../pages/invoices/invoice-list/invoice-list.page';
import { InvoicesPage } from '../pages/invoices/invoices.page';
import { ListPage } from '../pages/list-user/list.page';


const routes: Routes = [
{
  path: 'list',
  component: ListPage,
  canActivate: [authGuard]
},
{
  path: 'clients',
  component: ClientsPage,
  canActivate: [authGuard]
},
{
  path: 'invoices-list',
  component: InvoiceListPage,
  canActivate: [authGuard]
},
{
  path: 'invoice/:id',
  component: InvoicesPage,
  canActivate: [authGuard]
},
{
  path: 'add-client',
  component: AddClientPage,
  canActivate: [authGuard]
},
{
  path: 'add-invoice/:id',
  component: AddInvoicePage,
  canActivate: [authGuard]
},
{
  path: 'edit-invoice/:id',
  component: EditInvoicePage,
  canActivate: [authGuard]
},
{
  path: 'edit-client/:id',
  component: EditClientPage,
  canActivate: [authGuard]
},
{
  path: 'edit-invoice-list/:id',
  component: EditInvoiceListPage,
  canActivate: [authGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }