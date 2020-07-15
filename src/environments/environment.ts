export const environment = {
	production: false,
	baseUrl: 'http://localhost:4000/',
	apiUrl: 'http://localhost:8070/api/',
	goUrl: 'http://localhost:8080/api/',
	analytics: {
		url: 'https://analytics.iron-iq.com/',
		dashboard1: '/d/2ALVoJyWz/scada-dashboard?orgId=1',
		dashboard2: 'd/-XTNtedWz/south-wells-prediction-dashboard?orgId=1',
		dashboard3: 'd/pmOdNpdZk/master-dashboard?orgId=1'
	},
	keycloak: {
		url: 'https://auth.iron-iq.com/auth/',
		realm: 'utahgas',
		clientId: 'frontend_local'
	},
	mapbox: {
		accessToken:
			'pk.eyJ1IjoibWFwYm94LXJpIiwiYSI6IjAwbE9iblkifQ.BCxGtN4YUR4U4ivMIe05cQ'
	},
	indexes: {
		prediction: 'predictedprodwelldataflat',
		meter_data: 'utahgas_dtp_meter_data',
		propane_schedule: 'utahgas_propane_schedules',
		propane_ticket: 'utahgas_propane_tickets',
		propane_invoice: 'utahgas_propane_invoices',
		operator_data: 'utahgas_gps_data'
	}
};
