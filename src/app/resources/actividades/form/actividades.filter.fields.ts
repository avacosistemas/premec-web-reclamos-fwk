import { DynamicField } from "@fwk/core";

export const ACTIVIDADES_FILTER_FORM_FIELDS_DEF: DynamicField<any>[] = [
    {
        key: 'idServiceCall',
        controlType: 'hidden' as any,
        options: { hidden: true },
    },
    {
        key: 'estadoReclamo',
        controlType: 'hidden' as any,
        options: { hidden: true },
    },
];
