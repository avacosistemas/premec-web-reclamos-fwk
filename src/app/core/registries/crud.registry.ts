import { CrudModuleDefinition, CrudDef } from '@fwk/core';

export const CRUD_MODULES: CrudModuleDefinition[] = [
    {
        path: 'actividades',
        loader: () => import('app/resources/actividades/actividades.def')
    },
    {
        path: 'estadisticas',
        loader: () => import('app/resources/estadisticas/estadisticas.def')
    },
    {
        path: 'reclamos',
        loader: () => import('app/resources/reclamos/reclamos.def')
    },
];

export function loadAllCrudDefs(): Promise<any[]> {
  return Promise.all(CRUD_MODULES.map(m => m.loader().then((mod: any) => {
    const key = Object.keys(mod).find(k => k.endsWith('_DEF'));
    return key ? mod[key] : null;
  })));
}

export async function loadCrudDefByPath(path: string): Promise<CrudDef | null> {
    const moduleDefinition = CRUD_MODULES.find(m => m.path === path);
    if (!moduleDefinition) {
        return null;
    }
    const loadedModule = await moduleDefinition.loader();
    const defKey = Object.keys(loadedModule).find(key => key.endsWith('_DEF'));
    return defKey ? (loadedModule as any)[defKey] : null;
}
