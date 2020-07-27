import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

import { TeamRoutingModule } from './team-routing.module';
import { TeamListComponent } from './team-list/team-list.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { ActionrendererComponent } from './team-list/actionrenderer/actionrenderer.component';


@NgModule({
	declarations: [TeamListComponent, ActionrendererComponent],
	imports: [
		CommonModule,
		TeamRoutingModule,
		CoreModule.forAlert(),
		AgGridModule.withComponents([ActionrendererComponent]),
	]
})
export class TeamModule { }
