import { ExtractJwt } from 'passport-jwt';
import { UserRepository } from './authentication.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import env from 'dotenv';
import { User } from './user.entity';

env.config({ path: 'src/authentication/.env' });
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userRepository: UserRepository) {
        super({
            secretOrKey: process.env.SECRET_KEY,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    async validate(payload: Record<string, any>) {
        const { username } = payload;
        const user: User = await this.userRepository.findOne({
            where: {
                username,
            },
        });

        if (!user) {
            throw new UnauthorizedException(`잘 못된 접근입니다.`);
        }

        return user;
    }
}
