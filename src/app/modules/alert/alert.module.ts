import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from '@ag-grid-community/angular';
import { AlertRoutingModule } from './alert-routing.module';
import { AlertListComponent } from './alert-list/alert-list.component';
import { AlertSettingsComponent } from './alert-settings/alert-settings.component';
import { CoreModule } from '../core/core.module';
import { SeverityrendererComponent } from './alert-list/severityrenderer/severityrenderer.component';
import { StatusrendererComponent } from './alert-list/statusrenderer/statusrenderer.component';
import { ActionrendererComponent } from './alert-list/actionrenderer/actionrenderer.component';


@NgModule({
	declarations: [AlertListComponent, AlertSettingsComponent, SeverityrendererComponent, StatusrendererComponent, ActionrendererComponent],
	imports: [
		CommonModule,
		AlertRoutingModule,
		CoreModule.forAlert(),
		AgGridModule.withComponents([SeverityrendererComponent, StatusrendererComponent, ActionrendererComponent]),
	]
})
export class AlertModule { }
