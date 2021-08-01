import { UserState } from './user.reducer';
import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { User } from "../user";
import * as UserActions from './user.actions';


export interface UserState {
    markUserName: boolean,
    currentUser: User,
    error: string
}

const initialState: UserState = {
    markUserName: false,
    currentUser: null,
    error: ''
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMarkUserName = createSelector(
    getUserFeatureState,
    state => state.markUserName
);
export const getCurrentUser = createSelector(
    getUserFeatureState,
    state => state.
);

export const userReducer = createReducer(
    initialState,
    on(UserActions.markUserName, (state): UserState => {
        return { ...state, markUserName: !state.markUserName };
    }),
    on(UserActions.login, (state, action): UserState => {
        return { ...state, currentUser: state.currentUser, error: '' };
    }),
    on(UserActions.logout, (state): UserState => {
        return { ...state, currentUser: null, error: '' };
    })

);