import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';

@Component({
  selector: 'app-actionrenderer',
  templateUrl: './actionrenderer.component.html',
  styleUrls: ['./actionrenderer.component.scss']
})
export class ActionrendererComponent implements ICellRendererAngularComp {

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
