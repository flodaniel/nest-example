import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
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
    password: string;

    @Column({ default: 'FH Hagenberg' })
    fh?: string;

    @ManyToMany((type) => Language, (language) => language.isKnownBy, {
        eager: true,
        cascade: false,
    })
    @JoinTable()
    languages: Language[];
}
