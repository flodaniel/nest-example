import {
    BeforeInsert,
    Column,
    Entity,
    InsertEvent,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Language {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    difficulty: number;

    @ManyToMany((type) => User, (user) => user.languages, { eager: false, cascade: false })
    isKnownBy: User[];

    @BeforeInsert()
    checkDifficulty(event: InsertEvent<Language>): void {
        console.log('inserting language: ', event);
    }
}
