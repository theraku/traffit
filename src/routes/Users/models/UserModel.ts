export interface IUserModelDTO {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
}

export interface IUserModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  companyName: string;

  serialize(): IUserModelDTO;
}

class UserModel implements IUserModel {
  get companyName(): string {
    return this.company.name;
  }

  constructor(
    public id: number,
    public name: string,
    public email: string,
    public phone: string,
    public username: string,
    public website: string,
    public company: {
      bs: string;
      catchPhrase: string;
      name: string;
    },
    public address: {
      city: string;
      geo: {
        lat: string;
        lng: string;
      };
      street: string;
      suite: string;
      zipcode: string;
    }
  ) {}

  serialize(): IUserModelDTO {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      username: this.username,
      website: this.website,
      company: this.company,
      address: this.address
    };
  }

  static build(dto: IUserModelDTO) {
    return new UserModel(dto.id, dto.name, dto.email, dto.phone, dto.username, dto.website, dto.company, dto.address);
  }
}

export default UserModel;
