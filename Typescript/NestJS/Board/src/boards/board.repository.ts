import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Board } from './board.entity';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { User } from 'src/authentication/user.entity';

@Injectable()
export class BoardRepository extends Repository<Board> {
    constructor(private dataSource: DataSource) {
        super(Board, dataSource.createEntityManager());
    }

    async createBoard(createBoardDto: CreateBoardDto, user: User) {
        const { title, description } = createBoardDto;
        const board = this.create({
            title,
            description,
            status: BoardStatus.PUBLIC,
            user,
        });

        await this.save(board);
        return board;
    }
}