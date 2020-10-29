import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import {
    BeforeInsert,
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Language } from '../languages/language.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    @Exclude()
    password: string;

    @Column({ default: 'FH Hagenberg' })
    fh?: string;

    @ManyToMany((type) => Language, (language) => language.isKnownBy, {
        eager: true,
        cascade: false,
    })
    @JoinTable()
    languages: Language[];

    @BeforeInsert()
    hashPassword(): void {
        this.password = bcrypt.hashSync(this.password, 10);
    }
}
