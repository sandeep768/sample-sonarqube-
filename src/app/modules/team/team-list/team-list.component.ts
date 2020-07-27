import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { TeamService } from 'src/app/modules/core/team/team.service';
import * as moment from 'moment';
import { ActionrendererComponent } from './actionrenderer/actionrenderer.component';

@Component({
	selector: 'app-team-list',
	templateUrl: './team-list.component.html',
	styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

	load = false;
	columnDefs = [];
	rowData = [];
	defaultColDef = {
		sortable: true,
		resizable: false,
	};
	modules = AllCommunityModules;
	private gridApi;
	frameworkComponents: any;

	constructor(
		private themeService: ThemeService,
		private route: ActivatedRoute,
		private router: Router,
		private teamService: TeamService
	) {
		this.frameworkComponents = {
			ActionRendererComponent: ActionrendererComponent
		};
	}

	isDarkTheme: boolean;

	async loadRowData(response) {
		this.rowData = await response.map(f => {
			f.created_at = moment(new Date(f.created_at)).format('LLL');
			switch (f.severity) {
				case 'critical': f.severity = 'P3'; break;
			}
			return f;
		});
	}

	async ngOnInit() {
		this.themeService.themeChanged.subscribe(res => {
			this.isDarkTheme = res;
		});
		const response: any = await this.teamService.listTeams();
		console.log(response);
		this.loadRowData(response);
		this.columnDefs = [
			{
				headerName: 'Name',
				field: 'name',
				filter: 'agTextColumnFilter',
				filterParams: {
					defaultOption: 'contains'
				},
				width: 220,
			},
			{
				headerName: 'Created by',
				field: 'creator.first_name',
				filter: 'agTextColumnFilter',
				filterParams: {
					defaultOption: 'contains'
				},
				width: 180,
			},
			{
				headerName: 'Created on',
				field: 'created_at',
				filter: 'agTextColumnFilter',
				filterParams: {
					defaultOption: 'contains'
				},
				width: 220,
			},
			{
				headerName: 'Default group',
				field: 'default_group',
				filter: 'agTextColumnFilter',
				filterParams: {
					defaultOption: 'contains'
				},
				width: 200,
			},
			{
				headerName: 'Action',
				cellRenderer: 'ActionRendererComponent',
				width: 250,
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
