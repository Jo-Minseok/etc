import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { UserRepository } from './authentication.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import * as env from 'dotenv';
import { JwtStrategy } from './jwt.strategy';
env.config({ path: 'src/authentication/.env' });

@Module({
    imports: [
        PassportModule.register({
            defaultStrategy: 'jwt',
        }),
        JwtModule.register({
            secret: process.env.SECRET_KEY,
            signOptions: {
                expiresIn: 60 * 60,
            },
        }),
    ],
    controllers: [AuthenticationController],
    providers: [AuthenticationService, UserRepository, JwtStrategy],
    exports: [JwtStrategy, PassportModule],
})
export class AuthenticationModule {}
