import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";


export interface UserState {
    markUserName: boolean
}

const initialState: UserState = {
    markUserName: false
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMarkUserName = createSelector(
    getUserFeatureState,
    state => state.markUserName
);

export const userReducer = createReducer(
    initialState,
    on(createAction("[User] Mark User Name"), (state): UserState => {
        return { ...state, markUserName: !state.markUserName };
    })
);