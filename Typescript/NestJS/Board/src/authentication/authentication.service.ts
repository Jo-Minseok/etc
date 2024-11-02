import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './authentication.repository';
import { AuthCredentialsDto } from './dto/authcredential.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
    constructor(
        private userRepository: UserRepository,
        private jwtService: JwtService,
    ) {}

    async createUser(authCredentialDto: AuthCredentialsDto) {
        return this.userRepository.createUser(authCredentialDto);
    }

    async signIn(authCredentialsDto: AuthCredentialsDto) {
        // 비밀번호 비교
        const { username, password } = authCredentialsDto;
        const user = await this.userRepository.findOne({
            where: {
                username,
            },
        });
        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = {
                username,
            };
            const accessToken = await this.jwtService.signAsync(payload);
            return { accessToken };
        } else {
            throw new UnauthorizedException('로그인 실패');
        }
    }
}
