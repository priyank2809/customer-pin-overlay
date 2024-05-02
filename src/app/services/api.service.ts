import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'https://api.first.org/data/v1';

    constructor(private http: HttpClient) { }

    getRegions(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/countries`);
    }

    getCountries(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/countries`);
    }
}