import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { apiRequest } from '@common/helpers/ApiHelper';
import { ICommentModelDTO } from '@routes/Comments/models/CommentModel';

const commentsResourceUrl = '/comments';

export const CommentsResource = {
  getAll: (config: AxiosRequestConfig = {}): Promise<AxiosResponse<ICommentModelDTO[]>> =>
    apiRequest.get(commentsResourceUrl, config)
};
