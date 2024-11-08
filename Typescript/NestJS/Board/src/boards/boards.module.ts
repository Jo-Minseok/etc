import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { AuthenticationModule } from 'src/authentication/authentication.module';

@Module({
    imports: [TypeOrmModule.forFeature([Board]), AuthenticationModule],
    controllers: [BoardsController],
    providers: [BoardsService, BoardRepository],
})
export class BoardsModule {}
