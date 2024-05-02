import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from './customers/customer/customer.component';
import { PinComponent } from './pins/pin/pin.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    pins: any[] = [];

    constructor(private modalService: NgbModal) { }

    ngOnInit() {
        this.loadPinsFromLocalStorage();
    }

    openCustomerModal() {
        const modalRef = this.modalService.open(CustomerComponent);
    }

    openPinModal() {
        const modalRef = this.modalService.open(PinComponent);
        modalRef.result.then((newPin) => {
            if (newPin) {
                this.pins.push(newPin);
            }
        }, (reason) => {
            console.log(`Dismissed ${reason}`);
        });
    }

    loadPinsFromLocalStorage() {
        const pins = JSON.parse(localStorage.getItem('pins') || '[]');
        this.pins = pins;
    }
}
