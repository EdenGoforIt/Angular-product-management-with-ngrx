import { User } from './../user';
import { createAction, props } from '@ngrx/store';
import * as UserConstants from './user.constants';

export const login = createAction(UserConstants.LOGIN, props<{ user: User }>());
export const logout = createAction(UserConstants.LOGOUT);
export const markUserName = createAction(UserConstants.MARK_USER_NAME);