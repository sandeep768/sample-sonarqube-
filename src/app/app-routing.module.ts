import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './modules/shared/layout/layout.component';
import { NotfoundComponent } from './modules/shared/notfound/notfound.component';
import { AppAuthGuard } from './guards/app.authguard';
import { HelpComponent } from './modules/shared/help/help.component';

export const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		canActivate: [AppAuthGuard],
		children: [
			{
				path: 'alert',
				loadChildren: () =>
					import('./modules/alert/alert.module').then(mod => mod.AlertModule)
			},
			{
				path: '',
				redirectTo: '/alert',
				pathMatch: 'full'
			},

			{
				path: 'help',
				component: HelpComponent
			},
			{
				path: '**',
				component: NotfoundComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
	providers: [AppAuthGuard]
})
export class AppRoutingModule { }
