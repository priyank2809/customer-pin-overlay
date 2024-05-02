import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CustomerComponent } from './customer/customer.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
    declarations: [
        // CustomerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomersRoutingModule
    ]
})
export class CustomersModule { }
