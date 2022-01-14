import { Dispatch } from 'react';
import { AxiosRequestConfig } from 'axios';
import { UsersContextActionsType } from './UsersContextTypes';
import { IUserModel } from '@routes/Users/models/UserModel';

export interface IUsersContext {
  state: IUsersContextState;
  dispatch: Dispatch<UsersContextActionsType>;
  actions: IUsersContextActions;
}

export interface IUsersContextState {
  data: IUserModel[];
  isLoading: boolean;
  isLoaded: boolean;
}

export interface IUsersContextActions {
  getListAction(config?: AxiosRequestConfig): Promise<void>;
}
