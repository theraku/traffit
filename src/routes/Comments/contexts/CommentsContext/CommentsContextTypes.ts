import { CommentsContextDispatch } from './CommentsContextActions';
import { ActionsUnion } from '@common/types/ActionsType';

export type CommentsContextActionsType = ActionsUnion<typeof CommentsContextDispatch>;

export enum CommentsContextTypes {
  getList = 'COMMENTS/LIST/REQUEST',
  getListSuccess = 'COMMENTS/LIST/SUCCESS',
  getListFailure = 'COMMENTS/LIST/FAILURE',
}
