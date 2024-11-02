import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Patch,
    ParseIntPipe,
    UsePipes,
    ValidationPipe,
    UseGuards,
    Logger,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
import { BoardStatus } from './board-status.enum';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/authentication/get-user.decorator';
import { User } from 'src/authentication/user.entity';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
    private logger = new Logger('BoardsController');
    constructor(private boardsService: BoardsService) {}

    // @Get()
    // getAllBoard() {
    //     return this.boardsService.getAllBoards();
    // }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createBoard(@Body() createBoardDto: CreateBoardDto) {
    //     return this.boardsService.createBoard(createBoardDto);
    // }

    // @Get('/:id')
    // getBoardById(@Param('id') id: string) {
    //     return this.boardsService.getBoardById(id);
    // }

    // @Delete('/:id')
    // deleteBoardById(@Param('id') id: string) {
    //     this.boardsService.deleteBoard(id);
    // }

    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id: string,
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus,
    // ) {
    //     return this.boardsService.updateBoardStatus(id, status);
    // }

    // @Get('/test/:id')
    // findOne(@Param('id', ParseIntPipe) id: number) {
    //     return;
    // }

    @Get('/user')
    getBoardByUserId(@GetUser() user: User) {
        this.logger.verbose(`User ${user.username} trying to get him boards`);
        return this.boardsService.getBoardsByUserId(user);
    }

    @Delete('/user/:id')
    deleteBoardByUserId(
        @GetUser() user: User,
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.boardsService.deleteBoardByUser(id, user);
    }

    @Get('/:id')
    getBoardById(@Param('id', ParseIntPipe) id: number): Promise<Board> {
        return this.boardsService.getBoardById(id);
    }

    @Post('/')
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto: CreateBoardDto, @GetUser() user: User) {
        this.logger.verbose(
            `User ${user.username} creating a new board. Body: ${JSON.stringify(createBoardDto)}`,
        );
        return this.boardsService.createBoard(createBoardDto, user);
    }

    @Delete('/:id')
    deleteBoard(@Param('id', ParseIntPipe) id: number) {
        return this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus,
    ) {
        return this.boardsService.updateBoardStatus(id, status);
    }

    @Get('/')
    getAllBoard(@GetUser() user: User) {
        this.logger.verbose(`User ${user.username} trying to get all boards`);
        return this.boardsService.getAllBoards();
    }
}
