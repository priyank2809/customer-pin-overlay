import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    private customersKey = 'customers';

    constructor() { }

    getCustomers(): any[] {
        const customers = localStorage.getItem(this.customersKey);
        return customers ? JSON.parse(customers) : [];
    }

    addCustomer(customer: any) {
        const customers = this.getCustomers();
        customers.push(customer);
        localStorage.setItem(this.customersKey, JSON.stringify(customers));
    }
}