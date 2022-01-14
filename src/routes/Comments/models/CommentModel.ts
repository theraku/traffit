export interface ICommentModelDTO {
  id: number;
  name: string;
  body: string;
  postId: number;
  email: string;
}

export interface ICommentModel {
  id: number;
  name: string;
  body: string;
  postId: number;
  email: string;

  serialize(): ICommentModelDTO;
}

class CommentModel implements ICommentModel {
  constructor(
    public id: number,
    public name: string,
    public body: string,
    public postId: number,
    public email: string
  ) {}

  serialize(): ICommentModelDTO {
    return {
      id: this.id,
      name: this.name,
      body: this.body,
      postId: this.postId,
      email: this.email
    };
  }

  static build(dto: ICommentModelDTO) {
    return new CommentModel(dto.id, dto.name, dto.body, dto.postId, dto.email);
  }
}

export default CommentModel;
