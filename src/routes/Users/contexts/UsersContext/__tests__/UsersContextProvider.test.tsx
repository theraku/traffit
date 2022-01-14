import { renderHook } from '@testing-library/react-hooks';
import React, { useContext, ReactChildren } from 'react';
import { render } from '@testing-library/react';
import { initialState, UsersContext } from '@routes/Users/contexts/UsersContext/UsersContext';
import { UsersContextDispatch } from '@routes/Users/contexts/UsersContext/UsersContextActions';
import { UserModelData } from '@routes/Users/models/SampleData/UserModelData';
import UsersContextProvider from '@routes/Users/contexts/UsersContext/UsersContextProvider';

const state = initialState;
const dispatch = jest.fn();
const actions = { getListAction: async () => {} };

const mockUseContext = jest.fn().mockImplementation(() => ({ state, dispatch }));

React.useContext = mockUseContext;

describe('Users context provider', () => {
  test('should return object with its state, actions and dispatch function', async () => {
    const wrapper = ({ children }: { children: ReactChildren }) => (
      <UsersContext.Provider value={{ state, dispatch, actions }}>{children}</UsersContext.Provider>
    );

    render(<UsersContextProvider />);
    const { result } = renderHook(() => useContext(UsersContext), { wrapper });
    result.current.dispatch(UsersContextDispatch.getListSuccess(UserModelData));

    expect(result.current.state.data.length).toBe(0);
    expect(result.current.state.isLoaded).toBeFalsy();
    expect(result.current.state.isLoaded).toBeFalsy();
    expect(JSON.stringify(result.current)).toEqual(JSON.stringify({ state, dispatch, actions }));
  });
});
