import { UsersContextDispatch } from './UsersContextActions';
import { ActionsUnion } from '@common/types/ActionsType';

export type UsersContextActionsType = ActionsUnion<typeof UsersContextDispatch>;

export enum UsersContextTypes {
  getList = 'USERS/LIST/REQUEST',
  getListSuccess = 'USERS/LIST/SUCCESS',
  getListFailure = 'USERS/LIST/FAILURE',
}
