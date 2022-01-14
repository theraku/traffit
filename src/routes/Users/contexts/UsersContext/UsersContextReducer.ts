import { IUsersContextState } from './UsersContextInterfaces';
import { UsersContextActionsType, UsersContextTypes } from './UsersContextTypes';
import UserModel from '@routes/Users/models/UserModel';

function usersContextReducer(state: IUsersContextState, action: UsersContextActionsType): IUsersContextState {
  switch (action.type) {
    case UsersContextTypes.getList: {
      return {
        ...state,
        isLoading: true
      };
    }

    case UsersContextTypes.getListSuccess: {
      return {
        data: action.payload.map((u) => UserModel.build(u)),
        isLoaded: true,
        isLoading: false
      };
    }

    case UsersContextTypes.getListFailure: {
      return {
        ...state,
        isLoading: false
      };
    }
  }
}

export default usersContextReducer;
