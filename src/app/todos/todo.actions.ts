import { createAction, props } from "@ngrx/store";

export const limpiarTodos = createAction(
    '[TODO] Limpiar TODOs'
);

export const crear = createAction(
    '[TODO] Crea TODO',
    props<{texto:string}>()
);

export const toggle = createAction(
    '[TODO] Toggle TODO',
    props<{id:number}>()
);

export const editar = createAction(
    '[TODO] Editar TODO',
    props<{id:number, texto:string}>()
);

export const borrar = createAction(
    '[TODO] Borrar TODO',
    props<{id:number}>()
);

// toggleAll
// completado
export const toggleAll = createAction(
    '[TODO] Toggle all TODO',
    props<{completado:boolean}>()
);
