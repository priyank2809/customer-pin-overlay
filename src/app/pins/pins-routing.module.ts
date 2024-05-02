import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PinComponent } from './pin/pin.component';

const pinRoutes: Routes = [
    { path: '', component: PinComponent }
];

@NgModule({
    imports: [RouterModule.forChild(pinRoutes)],
    exports: [RouterModule]
})
export class PinsRoutingModule { }
