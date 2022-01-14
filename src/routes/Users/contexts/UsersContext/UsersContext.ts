import { createContext } from 'react';
import { IUsersContext, IUsersContextState } from './UsersContextInterfaces';

export const initialState: IUsersContextState = {
  data: [],
  isLoading: false,
  isLoaded: false
};

export const UsersContext = createContext<IUsersContext>({} as IUsersContext);
