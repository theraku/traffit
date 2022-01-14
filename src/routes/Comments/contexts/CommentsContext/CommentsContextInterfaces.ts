import { Dispatch } from 'react';
import { AxiosRequestConfig } from 'axios';
import { CommentsContextActionsType } from './CommentsContextTypes';
import { ICommentModel } from '@routes/Comments/models/CommentModel';

export interface ICommentsContext {
  state: ICommentsContextState;
  dispatch: Dispatch<CommentsContextActionsType>;
  actions: ICommentsContextActions;
}

export interface ICommentsContextState {
  data: ICommentModel[];
  isLoading: boolean;
  isLoaded: boolean;
}

export interface ICommentsContextActions {
  getListAction(config: AxiosRequestConfig): Promise<void>;
}
