import { renderHook } from '@testing-library/react-hooks';
import React, { useContext, ReactChildren } from 'react';
import { render } from '@testing-library/react';
import { initialState, CommentsContext } from '@routes/Comments/contexts/CommentsContext/CommentsContext';
import { CommentsContextDispatch } from '@routes/Comments/contexts/CommentsContext/CommentsContextActions';
import { CommentModelData } from '@routes/Comments/models/SampleData/CommentModelData';
import CommentsContextProvider from '@routes/Comments/contexts/CommentsContext/CommentsContextProvider';

const state = initialState;
const dispatch = jest.fn();
const actions = { getListAction: async () => {} };

const mockUseContext = jest.fn().mockImplementation(() => ({ state, dispatch }));

React.useContext = mockUseContext;

describe('Comments context provider', () => {
  test('should return object with its state, actions and dispatch function', async () => {
    const wrapper = ({ children }: { children: ReactChildren }) => (
      <CommentsContext.Provider value={{ state, dispatch, actions }}>
        {children}
      </CommentsContext.Provider>
    );

    render(<CommentsContextProvider />);
    const { result } = renderHook(() => useContext(CommentsContext), { wrapper });
    result.current.dispatch(CommentsContextDispatch.getListSuccess(CommentModelData));

    expect(result.current.state.data.length).toBe(0);
    expect(result.current.state.isLoaded).toBeFalsy();
    expect(result.current.state.isLoaded).toBeFalsy();
    expect(JSON.stringify(result.current)).toEqual(
      JSON.stringify({ state, dispatch, actions })
    );
  });
});
