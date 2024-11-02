import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/authcredential.dto';

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }

    async createUser(authCredentialDto: AuthCredentialsDto) {
        const { username, password } = authCredentialDto;
        const user = new User();
        user.username = username;
        user.password = password;
        try {
            await this.save(user);
        } catch (error) {
            throw error.code === '23505'
                ? new ConflictException('이미 회원가입 한 회원')
                : new InternalServerErrorException();
        }
        return {
            username: user.username,
        };
    }
}
