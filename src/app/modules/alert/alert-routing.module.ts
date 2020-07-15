import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertListComponent } from './alert-list/alert-list.component';
import { AlertSettingsComponent } from './alert-settings/alert-settings.component';


const routes: Routes = [
  {
    path: 'settings',
    component: AlertSettingsComponent
  },
  {
    path: '',
    component: AlertListComponent
  },
//   {
//     path: 'alert-list',
//     component: AlertListComponent
//   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertRoutingModule { }
