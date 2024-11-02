import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        BoardsModule,
        AuthenticationModule,
    ],
    controllers: [],
})
export class AppModule {}
