import { createContext } from 'react';
import { ICommentsContext, ICommentsContextState } from './CommentsContextInterfaces';

export const initialState: ICommentsContextState = {
  data: [],
  isLoading: false,
  isLoaded: false
};

export const CommentsContext = createContext<ICommentsContext>({} as ICommentsContext);
