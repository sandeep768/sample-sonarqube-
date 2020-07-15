import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';

@Component({
	selector: 'app-severityrenderer',
	templateUrl: './severityrenderer.component.html',
	styleUrls: ['./severityrenderer.component.scss']
})
export class SeverityrendererComponent implements ICellRendererAngularComp {

	params;
	label: string;

	constructor() { }

	agInit(params): void {
		this.params = params;
		this.label = this.params.label || null;
	}

	refresh(params?: any): boolean {
		return true;
	}
}