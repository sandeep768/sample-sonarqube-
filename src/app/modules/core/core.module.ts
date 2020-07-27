import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeService } from './theme.service';

// alert module related services
import { AlertService } from './alert/alert.service';
import { TeamService } from './team/team.service';


@NgModule({
	imports: [CommonModule],
	declarations: [],
	exports: [],
	providers: []
})
export class CoreModule {
	constructor() { }

	// declare global singleton services under this method
	static forRoot(): ModuleWithProviders<CoreModule> {
		return {
			ngModule: CoreModule,
			providers: [ThemeService]
		};
	}

	// declare site related to Search module under this method
	static forAlert(): ModuleWithProviders<CoreModule> {
		return {
			ngModule: CoreModule,
			providers: [AlertService]
		};
	}


	static forTeam(): ModuleWithProviders<CoreModule> {
		return {
			ngModule: CoreModule,
			providers: [TeamService]
		};
	}
}
