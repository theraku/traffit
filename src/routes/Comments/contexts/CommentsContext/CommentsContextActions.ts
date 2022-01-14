import { CommentsContextTypes } from './CommentsContextTypes';
import { createAction } from '@common/types/ActionsType';
import { ICommentModelDTO } from '@routes/Comments/models/CommentModel';

export const CommentsContextDispatch = {
  getList: () => createAction(CommentsContextTypes.getList),
  getListSuccess: (data: ICommentModelDTO[]) => createAction(CommentsContextTypes.getListSuccess, data),
  getListFailure: () => createAction(CommentsContextTypes.getListFailure),
};
