import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
@EntityRepository(User)
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
