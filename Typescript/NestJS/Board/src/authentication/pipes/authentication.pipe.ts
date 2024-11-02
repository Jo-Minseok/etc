import { AuthCredentialsDto } from '../dto/authcredential.dto';
import {
    ArgumentMetadata,
    Injectable,
    InternalServerErrorException,
    PipeTransform,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptPassword implements PipeTransform {
    async transform(
        createUserDto: AuthCredentialsDto,
        metadata: ArgumentMetadata,
    ) {
        const encryptPassword = await bcrypt.hash(createUserDto.password, 10);
        if (!encryptPassword) {
            throw new InternalServerErrorException(
                `비밀번호 암호화를 실패했습니다.`,
            );
        }
        createUserDto.password = encryptPassword;
        return createUserDto;
    }
}
