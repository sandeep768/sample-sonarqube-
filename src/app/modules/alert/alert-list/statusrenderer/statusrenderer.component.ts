import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';

@Component({
  selector: 'app-statusrenderer',
  templateUrl: './statusrenderer.component.html',
  styleUrls: ['./statusrenderer.component.scss']
})
export class StatusrendererComponent implements ICellRendererAngularComp {

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