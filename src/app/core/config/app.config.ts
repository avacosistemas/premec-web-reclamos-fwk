import { Route } from '@angular/router';
import { FwkConfig, AppColors } from '@fwk/core';
// import { CustomTopNavigationComponent } from 'app/core/components/custom/top-navigation/custom-top-navigation.component';
// import { CustomTopbarComponent } from 'app/core/components/custom/topbar/custom-topbar.component';
// import { CustomUserMenuComponent } from 'app/core/components/custom/user-menu/custom-user-menu.component';
// import { CustomMainFooterComponent } from 'app/core/components/custom/main-footer/custom-main-footer.component';
// import { CustomAuthFooterComponent } from 'app/core/components/custom/auth-footer/custom-auth-footer.component';

export { AppColors };

export const APP_CONFIG: {
    brand: NonNullable<FwkConfig['brand']>;
    welcome: NonNullable<FwkConfig['welcome']>;
    sidebar: NonNullable<FwkConfig['sidebar']>;
    search: NonNullable<FwkConfig['search']>;
    routing: NonNullable<FwkConfig['routing']>;
    colors: AppColors;
    customRoutes: Route[];
    autocompleteWaitingTime: number;
    customTopbarComponent?: FwkConfig['customTopbarComponent'];
    customUserMenuComponent?: FwkConfig['customUserMenuComponent'];
    customMainFooterComponent?: FwkConfig['customMainFooterComponent'];
    customAuthFormFooterComponent?: FwkConfig['customAuthFormFooterComponent'];
    auth?: FwkConfig['auth'];
} = {
    brand: {
        name: 'PREMEC',
        logo: {
            auth: 'assets/images/logo/logo_premec.png',
            sidebar: 'assets/images/logo/logo_premec.png',
        },
        isologo: 'assets/images/logo/logo_premec.png',
        style: {
            auth: {
                showName: true,
                containerClass: 'justify-start',
                imgClass: 'w-10',
                nameClass: 'text-xl font-bold',
            },
            sidebar: {
                showName: false,
                containerClass: 'w-16',
                imgClass: 'h-10',
                nameClass: 'text-xl font-bold',
            },
        },
    },
    welcome: {
        titleLine1: 'Gestor de Reclamos',
        titleLine2: '',
        signInSubtitle: '¡Bienvenido! Desde aquí podrás gestionar tus reclamos',
    },
    sidebar: {
        opened: true,
        collapseIcon: true,
        // customTopComponent: CustomTopNavigationComponent,
    },
    // customTopbarComponent: CustomTopbarComponent,
    // customUserMenuComponent: CustomUserMenuComponent,
    // customMainFooterComponent: CustomMainFooterComponent,
    // customAuthFormFooterComponent: CustomAuthFooterComponent,
    auth: {
        sideBackground: {
            imageUrl: null,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overlayOpacity: 0.45,
            subtitleColor: 'rgba(255, 255, 255, 0.85)'
        },
        links: {
            forgotPassword: {
                show: true,
                url: '/forgot-password',
                isExternal: false
            },
            signUp: {
                show: false,
                url: '/register',
                isExternal: true
            }
        }
    },
    search: {
        showButton: false,
    },
    routing: {
        redirectOnLogout: '/sign-in',
        defaultRedirect: '/reclamos',
        welcomeDashboard: false,
    },
    colors: {
        primary: '#3b82f6',
        accent: '#3b82f6',
        warn: '#dc2626',
        bg: {
            default: '#f1f5f9',
            card: '#ffffff',
            dialog: '#ffffff',
            hover: 'rgba(148, 163, 184, 0.12)',
        },
        text: {
            default: '#1e293b',
            secondary: '#64748b',
            hint: '#94a3b8',
            disabled: '#94a3b8',
        },
        border: '#e2e8f0',
        divider: '#e2e8f0',
        icon: '#64748b',
        dark: {
            bg: {
                default: '#0f172a',
                card: '#1e293b',
                dialog: '#1e293b',
                hover: 'rgba(255, 255, 255, 0.05)',
            },
            text: {
                default: '#ffffff',
                secondary: '#94a3b8',
                hint: '#64748b',
                disabled: '#475569',
            },
            border: '#f1f5f9',
            divider: '#f1f5f9',
            icon: '#94a3b8',
        },
    },
    customRoutes: [
        //  { path: 'welcome', loadChildren: () => import('app/modules/welcome/welcome.routes') },
    ],
    autocompleteWaitingTime: 700,
};