import { UsersContextTypes } from './UsersContextTypes';
import { createAction } from '@common/types/ActionsType';
import { IUserModelDTO } from '@routes/Users/models/UserModel';

export const UsersContextDispatch = {
  getList: () => createAction(UsersContextTypes.getList),
  getListSuccess: (data: IUserModelDTO[]) => createAction(UsersContextTypes.getListSuccess, data),
  getListFailure: () => createAction(UsersContextTypes.getListFailure),
};
