import CommentModel, { ICommentModel, ICommentModelDTO } from '@routes/Comments/models/CommentModel';
import { CommentModelData } from '@routes/Comments/models/SampleData/CommentModelData';

describe('Comment Model', () => {
  let instance: ICommentModel;
  const initialData = CommentModelData[0];

  beforeEach(() => {
    instance = CommentModel.build(initialData);
  });

  test('build() - should return an object of instance CommentModel', () => {
    expect(instance).toBeDefined();
    expect(typeof instance).toBe('object');
    expect(instance).toBeInstanceOf(CommentModel);
  });

  test('serialize() - should return an object of interface ICommentModelDTO', () => {
    const serialize: ICommentModelDTO = instance.serialize();

    expect(serialize).toBeDefined();
    expect(typeof serialize).toBe('object');
    expect(serialize).toEqual(CommentModelData[0]);
  });
});
