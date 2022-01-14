import React, { useReducer } from 'react';
import { UsersContext, initialState } from './UsersContext';
import usersContextReducer from './UsersContextReducer';
import { UsersContextDispatch } from './UsersContextActions';
import { AxiosRequestConfig } from 'axios';
import { UsersResource } from '@routes/Users/api/UsersResource';

const UsersContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(usersContextReducer, initialState);

  const getListAction = async (config: AxiosRequestConfig) => {
    try {
      dispatch(UsersContextDispatch.getList());

      const response = await UsersResource.getAll(config);

      dispatch(UsersContextDispatch.getListSuccess(response.data));
    } catch (e) {
      dispatch(UsersContextDispatch.getListFailure());
    }
  };

  return (
    <UsersContext.Provider
      value={{
        state,
        dispatch,
        actions: {
          getListAction,
        }
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
