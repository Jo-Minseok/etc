import { Board } from 'src/boards/board.entity';
import {
    BaseEntity,
    Column,
    Entity,
    IsNull,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({
        length: 60,
    })
    password: string;

    @OneToMany((type) => Board, (board) => board.user, { eager: true })
    boards: Board[];
}
