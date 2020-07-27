export const environment = {
	production: false,
	baseUrl: 'http://localhost:4000/',
	apiUrl: 'http://localhost:3001/api/',
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
};
