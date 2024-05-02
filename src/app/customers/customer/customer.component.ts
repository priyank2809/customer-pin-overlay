import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CustomerService } from '../../services/customer.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

    customerForm!: FormGroup;
    regions: any[] = [];
    countries: any[] = [];

    constructor(
        private fb: FormBuilder,
        private apiService: ApiService,
        private customerService: CustomerService,
        public activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
        this.initForm();
        this.fetchRegions();
    }

    initForm() {
        this.customerForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            region: ['', Validators.required],
            country: ['', Validators.required]
        });
    }

    fetchRegions() {
        this.apiService.getRegions().subscribe(
            (data: any[]) => {
                this.regions = this.mapRegions(data);
            },
            (error) => {
                console.error('Error fetching regions:', error);
            }
        );
    }

    mapRegions(data: any): any[] {
        let regions: any[] = [];
        for (let code in data.data) {
            regions.push({ optionId: code, optionTitle: data.data[code].region });
        }
        return regions;
    }

    fetchCountries() {
        this.apiService.getCountries().subscribe(
            (data: any[]) => {
                this.countries = this.mapCountries(data);
            },
            (error) => {
                console.error('Error fetching countries:', error);
            }
        );
    }

    mapCountries(data: any): any[] {
        let countries: any[] = [];
        for (let code in data.data) {
            countries.push({ optionId: code, optionTitle: data.data[code].country });
        }
        return countries;
    }

    onSubmit() {
        if (this.customerForm.valid) {
            console.log('values', this.customerForm.value);
            const customer = this.customerForm.value;
            this.customerService.addCustomer(customer);
            this.activeModal.close();
        }
    }

}
