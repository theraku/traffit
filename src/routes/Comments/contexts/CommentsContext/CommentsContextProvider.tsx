import React, { useReducer } from 'react';
import { CommentsContext, initialState } from './CommentsContext';
import commentsContextReducer from './CommentsContextReducer';
import { CommentsContextDispatch } from './CommentsContextActions';
import { AxiosRequestConfig } from 'axios';
import { CommentsResource } from '@routes/Comments/api/CommentsResource';

const CommentsContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(commentsContextReducer, initialState);

  const getListAction = async (config: AxiosRequestConfig) => {
    try {
      dispatch(CommentsContextDispatch.getList());

      const response = await CommentsResource.getAll(config);

      dispatch(CommentsContextDispatch.getListSuccess(response.data));
    } catch (e) {
      dispatch(CommentsContextDispatch.getListFailure());
    }
  };

  return (
    <CommentsContext.Provider
      value={{
        state,
        dispatch,
        actions: {
          getListAction,
        }
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsContextProvider;
