import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSelectModule } from 'ngx-select-ex';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerComponent } from './customers/customer/customer.component';
import { PinComponent } from './pins/pin/pin.component';

import { ApiService } from './services/api.service';
import { CustomerService } from './services/customer.service';

@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent,
        PinComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NgbModule,
        NgxSelectModule,
        FileUploadModule,
        HttpClientModule
    ],
    providers: [
        ApiService,
        CustomerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
