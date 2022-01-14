import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { apiRequest } from '@common/helpers/ApiHelper';
import { IUserModelDTO } from '@routes/Users/models/UserModel';

const usersResourceUrl = '/users';

export const UsersResource = {
  getAll: (config: AxiosRequestConfig = {}): Promise<AxiosResponse<IUserModelDTO[]>> =>
    apiRequest.get(usersResourceUrl, config)
};
