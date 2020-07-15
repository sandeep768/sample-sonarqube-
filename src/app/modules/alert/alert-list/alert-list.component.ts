import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { AlertService } from 'src/app/modules/core/alert/alert.service';
import * as moment from 'moment';
import { SeverityrendererComponent } from './severityrenderer/severityrenderer.component';
import { StatusrendererComponent } from './statusrenderer/statusrenderer.component';
import { ActionrendererComponent } from './actionrenderer/actionrenderer.component';

@Component({
	selector: 'app-alert-list',
	templateUrl: './alert-list.component.html',
	styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit {

	load = false;
	columnDefs = [];
	rowData = [];
	defaultColDef = {
		sortable: true,
		resizable: false,
		// filter: true
	};
	modules = AllCommunityModules;
	private gridApi;
	listingAction = 'all';
	frameworkComponents: any;

	constructor(
		private themeService: ThemeService,
		private route: ActivatedRoute,
		private router: Router,
		private alertService: AlertService
	) {
		this.frameworkComponents = {
			SeverityRendererComponent: SeverityrendererComponent,
			StatusRendererComponent: StatusrendererComponent,
			ActionRendererComponent: ActionrendererComponent
		};
	}

	isDarkTheme: boolean;
	laborViewSwitcher = 'activity-overview';
	selectedRange = 'All time';

	updateListing(view) {
		this.listingAction = view;
		console.log(view);
	}

	async filterByDate(e) {
		this.selectedRange = e;
		let startDate;
		const endDate = moment().format('YYYY-MM-DD HH:mm:ss');
		switch (e) {
			case 'Last hour': startDate = moment(new Date()).subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss'); break;
			case 'Last day': startDate = moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss'); break;
			case 'Last week': startDate = moment().subtract(7, 'days').format('YYYY-MM-DD HH:mm:ss'); break;
			case 'Last month': startDate = moment().subtract(30, 'days').format('YYYY-MM-DD HH:mm:ss'); break;;
		}
		const response: any = await this.alertService.listAlerts(e, startDate, endDate);
		this.rowData = await response.map(f => {
			f.created_at = moment(new Date(f.created_at)).format('LLL')
			return f;
		});
	}

	async ngOnInit() {
		this.themeService.themeChanged.subscribe(res => {
			this.isDarkTheme = res;
		});
		const response: any = await this.alertService.listAlerts('All time', 0, 0);
		this.rowData = await response.map(f => {
			f.created_at = moment(new Date(f.created_at)).format('LLL');
			switch (f.severity) {
				case 'critical': f.severity = 'P3'; break;
			}
			return f;
		});
		this.columnDefs = [
			{
				headerName: 'Info',
				cellRenderer: 'SeverityRendererComponent',
				width: 65,
			},
			{
				headerName: 'Tag name',
				field: 'alertname',
				filter: 'agTextColumnFilter',
				filterParams: {
					defaultOption: 'contains'
				},
				width: 200,
			},
			{
				headerName: 'Metric',
				field: 'metricName',
				filter: 'agTextColumnFilter',
				filterParams: {
					defaultOption: 'contains'
				},
				width: 150,
			},
			{
				headerName: 'Description',
				field: 'description',
				filter: 'agTextColumnFilter',
				filterParams: {
					defaultOption: 'contains'
				},
				width: 400,
			},
			{
				headerName: 'Timestamp',
				field: 'created_at',
				filter: 'agTextColumnFilter',
				filterParams: {
					defaultOption: 'contains'
				},
				width: 200,
			},
			{
				headerName: 'Status',
				cellRenderer: 'StatusRendererComponent',
				width: 100,
			},
			{
				headerName: 'Action',
				cellRenderer: 'ActionRendererComponent',
				width: 200,
			},
		];
	}

	details(e: any) {
		this.router.navigate(['/dashboard/detail'], {
			queryParams: { api_id: e.rowData.api_id },
			queryParamsHandling: 'merge'
		});
	}

	onGridReady(params) {
		this.gridApi = params.api;
	}

	loader() {
		this.load = true;
	}

}
