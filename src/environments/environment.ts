// export const PREFIX_DOMAIN_API = 'http://localhost:8080/ws-reclamos/';
// export const PREFIX_DOMAIN_API = 'http://premec.ddns.net:48080/ws-reclamos/';
export const PREFIX_DOMAIN_API = 'assets/mocks/';
export const PREFIX_DOMAIN_WEB = 'http://localhost:4200/';
// export const PREFIX_STATS_API = PREFIX_DOMAIN_API + 'estadisticas/'; // Reservado prefijo y endpoint para dashboards
export const PREFIX_STATS_API = 'assets/mocks/';
export const PREFIX_SWAGGER_API = 'http://premec.ddns.net:48080/ws-reclamos/v2/api-docs';

export const environment = {
    version: '1.0.46',
    production: false,
    security: true,
    dummyServices: false,
    hmr: false,
    appId: 'reclamosApp',

    // apiBaseUrl: PREFIX_DOMAIN_API,
    apiBaseUrl: 'assets/mocks/',
    siteInstitucionalUrl: PREFIX_DOMAIN_WEB,
    autocompleteWaitingTime: 700,
    // recaptchaSiteKey: null,

    auth: {
        // signIn: PREFIX_DOMAIN_API + 'auth',
        signIn: 'assets/mocks/auth.json',
        signOut: PREFIX_DOMAIN_API + 'user/logout',
        // refreshToken: PREFIX_DOMAIN_API + 'refresh',
        refreshToken: 'assets/mocks/refresh.json',
        forgotPassword: PREFIX_DOMAIN_API + 'password/reset',
        changePassword: PREFIX_DOMAIN_API + 'password/update/',
        resetPassword: PREFIX_DOMAIN_API + 'password/reset',
        signUp: PREFIX_DOMAIN_API + 'auth/sign-up'
    },
};