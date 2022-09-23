import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, editar, toggle } from './todo.actions';

export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo del Capitán America'),
];

export const todoReducer = createReducer(estadoInicial, 
    on(crear, (state, {texto}) => [
        ...state, 
        new Todo(texto)
    ]),
    on(toggle, (state, {id}) => {
        return state.map( todo => {
            if( todo.id === id ){
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo;
            }
        });
    }),
    on(editar, (state, {id, texto}) => {
        return state.map( todo => {
            if( todo.id === id ){
                return {
                    ...todo,
                    texto: texto
                }
            } else {
                return todo;
            }
        });
    })
);
