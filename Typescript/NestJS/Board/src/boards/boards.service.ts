import { Injectable, NotFoundException } from '@nestjs/common';
// import { Board } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { BoardStatus } from './board-status.enum';
import { User } from 'src/authentication/user.entity';

@Injectable()
export class BoardsService {
    constructor(private boardRepository: BoardRepository) {}
    // private boards: Board[] = [];
    // getAllBoards() {
    //     return this.boards;
    // }
    // getBoardById(id: string) {
    //     const found = this.boards.find((board) => board.id === id);
    //     if (!found) {
    //         throw new NotFoundException(`Cannot Found ${id}`);
    //     }
    //     return found;
    // }
    // createBoard(createBoardDto: CreateBoardDto) {
    //     const { title, description } = createBoardDto;
    //     const board: Board = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: BoardStatus.PUBLIC,
    //     };
    //     this.boards.push(board);
    //     return board;
    // }
    // deleteBoard(id: string) {
    //     const found = this.getBoardById(id);
    //     this.boards = this.boards.filter((board) => board.id !== found.id);
    // }
    // updateBoardStatus(id: string, status: BoardStatus) {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }

    async getBoardById(id: number) {
        const found = await this.boardRepository.findOne({
            where: {
                id,
            },
        });

        if (!found) {
            throw new NotFoundException(
                `${id}에 해당하는 게시글을 찾을 수 없습니다.`,
            );
        }

        return found;
    }

    createBoard(createBoardDto: CreateBoardDto, user: User) {
        return this.boardRepository.createBoard(createBoardDto, user);
    }

    async deleteBoard(id: number) {
        const result = await this.boardRepository.delete(id);
        if (!result.affected) {
            throw new NotFoundException(`Can't delete board with ${id}`);
        }
        console.log('result', result);
    }

    async deleteBoardByUser(id: number, user: User) {
        const result = await this.boardRepository.delete({
            id,
            user,
        });
        if (!result.affected) {
            throw new NotFoundException(`Can't delete board with ${id}`);
        }
        console.log('result', result);
    }

    async updateBoardStatus(id: number, status: BoardStatus) {
        const board = await this.getBoardById(id);
        board.status = status;
        await this.boardRepository.save(board);
        return board;
    }

    async getAllBoards() {
        const boards = await this.boardRepository.find();
        return boards;
    }

    async getBoardsByUserId(user: User) {
        const query = this.boardRepository.createQueryBuilder('board');
        query.where('board.userId = :userId', { userId: user.id });
        const boards = await query.getMany();

        return boards;
    }
}
