import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { ThemeService } from 'src/app/modules/core/theme.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	canAccessAdminDashboard: boolean;
	constructor(
		private keycloakService: KeycloakService,
		private themeService: ThemeService,
		public router: Router
	) { }

	KeycloakProfile: KeycloakProfile;
	userName: string;
	jwt: string;
	userId: string;
	isDarkTheme: boolean;
	isChecked: any;
	userPref: any;
	currentTheme: any;
	analyticsUrl = environment.analytics.url+ environment.analytics.dashboard1;
	dashboardUrl = environment.analytics.url + environment.analytics.dashboard2;
	profileUrl =
		environment.keycloak.url +
		'realms/' +
		environment.keycloak.realm +
		'/account/';

	goToRoute(event: string) {
		if (event === '/customcharts/prediction') {
			this.router.navigate([event], {
				queryParams: {
					wellName: 'Dragon Trail Un 1011',
					apiId: '05-103-01012-00-00'
				}
			});
		} else if (event === '/plant/sales') {
			this.router.navigate([event], {
				queryParams: {
					activeTab: 'propane-schedule'
				}
			});
		} else {
			this.router.navigate([event]);
		}
	}

	public async ngOnInit() {
		this.KeycloakProfile = await this.keycloakService.loadUserProfile();
		this.userName = await this.KeycloakProfile.firstName;
		await this.keycloakService.getToken().then(f => (this.jwt = f));
		this.themeService.getUserPreference().then(res => {
			this.userPref = res === null ? { isDarkTheme: false } : res;
			this.isDarkTheme = this.userPref.dark_theme;
			this.isDarkTheme
				? (this.currentTheme = 'Dark')
				: (this.currentTheme = 'Light');
			this.isDarkTheme ? (this.isChecked = true) : (this.isChecked = false);
			this.userPref.dark_theme === undefined
				? this.themeService.onThemeChange(true)
				: this.themeService.onThemeChange(this.userPref.dark_theme);
			this.themeService.userPref(this.userPref.dark_theme);
		});
	}

	async logout() {
		await localStorage.clear();
		await this.keycloakService.logout();
	}

	switchTheme(e) {
		this.isChecked ? (this.isDarkTheme = true) : (this.isDarkTheme = false);
		this.themeService.updateThemePreference(this.isDarkTheme).then(res => {
			this.themeService.onThemeChange(this.isDarkTheme);
		});
	}
}
