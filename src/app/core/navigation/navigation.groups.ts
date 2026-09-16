import { FwkNavigationItem } from '@fwk/core';

export interface NavigationGroup extends FwkNavigationItem {
    id: string;
    title: string;
    type: 'collapsable' | 'group';
    icon?: string;
    children?: FwkNavigationItem[]; 
    order?: number;
}

export const NAVIGATION_GROUPS_MAP: NavigationGroup[] = [
    {
        id: 'menu_servicios',
        title: 'Servicios',
        type: 'group',
        icon: 'heroicons_outline:wrench-screwdriver',
    },
    {
        id: 'seguridad',
        title: 'Seguridad',
        type: 'group',
        icon: 'heroicons_outline:shield-check',
    }
];
