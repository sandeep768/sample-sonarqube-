import { KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment';

const env = environment;
export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: {
            url: env.keycloak.url,
            realm: env.keycloak.realm,
            clientId: env.keycloak.clientId
          },
          initOptions: {
            flow: 'implicit',
            onLoad: 'login-required',
            checkLoginIframe: false
          },
          enableBearerInterceptor: true,
          bearerExcludedUrls: []
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
