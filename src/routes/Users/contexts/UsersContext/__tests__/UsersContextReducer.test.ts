import usersContextReducer from '../UsersContextReducer';
import { initialState } from '@routes/Users/contexts/UsersContext/UsersContext';
import { UsersContextDispatch } from '@routes/Users/contexts/UsersContext/UsersContextActions';
import { UserModelData } from '@routes/Users/models/SampleData/UserModelData';
import UserModel from '@routes/Users/models/UserModel';

describe('Users context reducer', () => {
  test('returns new state for "USERS/LIST/REQUEST" type', () => {
    const updatedState = usersContextReducer(initialState, UsersContextDispatch.getList());
    expect(updatedState).toEqual({
      data: [],
      isLoading: true,
      isLoaded: false
    });
  });

  test('returns new state for "USERS/LIST/SUCCESS" type', () => {
    const updatedState = usersContextReducer(initialState, UsersContextDispatch.getListSuccess(UserModelData));
    expect(updatedState).toEqual({
      data: UserModelData.map((i) => UserModel.build(i)),
      isLoading: false,
      isLoaded: true
    });
  });

  test('returns new state for "USERS/LIST/FAILURE" type', () => {
    const updatedState = usersContextReducer(initialState, UsersContextDispatch.getListFailure());

    expect(updatedState).toEqual({
      data: [],
      isLoading: false,
      isLoaded: false
    });
  });
});
