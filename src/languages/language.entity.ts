import { BeforeInsert, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
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
    checkDifficulty(): void {
        this.difficulty = this.name.length * 2;
    }
}
