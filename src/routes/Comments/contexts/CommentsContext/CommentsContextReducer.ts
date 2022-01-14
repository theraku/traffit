import { ICommentsContextState } from './CommentsContextInterfaces';
import { CommentsContextActionsType, CommentsContextTypes } from './CommentsContextTypes';
import CommentModel from '@routes/Comments/models/CommentModel';

function commentsContextReducer(state: ICommentsContextState, action: CommentsContextActionsType): ICommentsContextState {
  switch (action.type) {
    case CommentsContextTypes.getList: {
      return {
        ...state,
        isLoading: true
      };
    }

    case CommentsContextTypes.getListSuccess: {
      return {
        data: action.payload.map((u) => CommentModel.build(u)),
        isLoaded: true,
        isLoading: false
      };
    }

    case CommentsContextTypes.getListFailure: {
      return {
        ...state,
        isLoading: false
      };
    }
  }
}

export default commentsContextReducer;
