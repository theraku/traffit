import UserModel, { IUserModel, IUserModelDTO } from '@routes/Users/models/UserModel';
import { UserModelData } from '@routes/Users/models/SampleData/UserModelData';

describe('User Model', () => {
  let instance: IUserModel;
  const initialData = UserModelData[2];

  beforeEach(() => {
    instance = UserModel.build(initialData);
  });

  test('build() - should return an object of instance UserModel', () => {
    expect(instance).toBeDefined();
    expect(typeof instance).toBe('object');
    expect(instance).toBeInstanceOf(UserModel);
    expect(instance).toHaveProperty('companyName', instance.company.name)
  });

  test('serialize() - should return an object of interface IUserModelDTO', () => {
    const serialize: IUserModelDTO = instance.serialize();

    expect(serialize).toBeDefined();
    expect(typeof serialize).toBe('object');
    expect(serialize).toEqual(UserModelData[2]);
  });
});
