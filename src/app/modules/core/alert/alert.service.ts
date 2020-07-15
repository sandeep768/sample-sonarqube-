import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AlertService {

	constructor(private http: HttpClient) { }

	async listAlerts(e, startDate, endDate) {
		const url = `${environment.apiUrl}alert/listAlerts`;
		const response = await this.http.post(url, { selectedRange:e, startDate, endDate }).toPromise();
		return response;
	}
}
