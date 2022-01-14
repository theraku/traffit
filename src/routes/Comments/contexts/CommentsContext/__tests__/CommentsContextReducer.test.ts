import commentsContextReducer from '../CommentsContextReducer';
import { initialState } from '@routes/Comments/contexts/CommentsContext/CommentsContext';
import { CommentsContextDispatch } from '@routes/Comments/contexts/CommentsContext/CommentsContextActions';
import { CommentModelData } from '@routes/Comments/models/SampleData/CommentModelData';
import CommentModel from '@routes/Comments/models/CommentModel';

describe('Comments context reducer', () => {
  test('returns new state for "COMMENTS/LIST/REQUEST" type', () => {
    const updatedState = commentsContextReducer(initialState, CommentsContextDispatch.getList());
    expect(updatedState).toEqual({
      data: [],
      isLoading: true,
      isLoaded: false
    });
  });

  test('returns new state for "COMMENTS/LIST/SUCCESS" type', () => {
    const updatedState = commentsContextReducer(initialState, CommentsContextDispatch.getListSuccess(CommentModelData));
    expect(updatedState).toEqual({
      data: CommentModelData.map((i) => CommentModel.build(i)),
      isLoading: false,
      isLoaded: true
    });
  });

  test('returns new state for "COMMENTS/LIST/FAILURE" type', () => {
    const updatedState = commentsContextReducer(initialState, CommentsContextDispatch.getListFailure());

    expect(updatedState).toEqual({
      data: [],
      isLoading: false,
      isLoaded: false
    });
  });
});
