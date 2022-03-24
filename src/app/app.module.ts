import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { SignupPage } from './pages/signup/signup.page';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { ListPage } from './pages/list-user/list.page';
import { ClientsPage } from './pages/clients/clients.page';
import { InvoicesPage } from './pages/invoices/invoices.page';
import { AddInvoicePage } from './pages/invoices/add-invoice/add-invoice.page';
import { AddClientPage } from './pages/clients/add-client/add-client.page';
import { InvoiceListPage } from './pages/invoices/invoice-list/invoice-list.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AuthRoutingModule } from './routing/auth-routing.module';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { EditInvoicePage } from './pages/invoices/edit-invoice/edit-invoice.page';
import { EditClientPage } from './pages/clients/edit-client/edit-client.page';
import { EditInvoiceListPage } from './pages/invoices/invoice-list/edit-invoice-list/edit-invoice-list.page';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';


@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    SignupPage,
    NavbarComponent,
    ListPage,
    ClientsPage,
    InvoicesPage,
    AddClientPage,
    AddInvoicePage,
    InvoiceListPage,
    EditInvoicePage,
    EditClientPage,
    EditInvoiceListPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzSelectModule,
    NzTableModule,
    NzDatePickerModule,
    NzInputNumberModule,
    NzPaginationModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}