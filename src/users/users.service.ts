import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LanguagesService } from '../languages/languages.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: UsersRepository,
        private readonly languagesService: LanguagesService,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        user.languages = await this.languagesService.findByNames(createUserDto.languages);
        user.password = createUserDto.password;
        return this.usersRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
