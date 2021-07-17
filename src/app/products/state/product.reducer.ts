import { createAction, on, createReducer } from "@ngrx/store";

export const productReducer = createReducer({
    showProductCode: true
},
    on(createAction('[Product] Toggle Product Code'), state => {
        return { ...state, showProductCode: !state.showProductCode };
    },


    ));
