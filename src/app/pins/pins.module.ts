import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PinComponent } from './pin/pin.component';
import { PinsRoutingModule } from './pins-routing.module';
import { NgxSelectModule } from 'ngx-select-ex';

@NgModule({
    declarations: [
        // PinComponent
    ],
    imports: [
        CommonModule,
        PinsRoutingModule,
        NgxSelectModule
    ]
})
export class PinsModule { }
