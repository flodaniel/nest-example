import { Repository } from 'typeorm';
import { User } from './user.entity';

export class UsersRepository extends Repository<User> {
  constructor() {
    super();
  }

  public async findFhHagenbergUsers(): Promise<User[]> {
    return await this.find({
      where: {
        fh: 'FH Hagenberg ',
      },
    });
  }
}
