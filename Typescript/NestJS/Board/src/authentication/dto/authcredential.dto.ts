import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class AuthCredentialsDto {
    @IsNotEmpty({ message: 'ID가 입력되지 않았습니다.' })
    @IsString()
    @Length(6, 16, { message: '유저 이름은 6~16자리여야 합니다.' })
    username: string;

    @IsNotEmpty({ message: 'PASSWORD가 입력되지 않았습니다.' })
    @IsString()
    @Length(6, 16, { message: '비밀번호는 6~16자리여야 합니다.' })
    @Matches(/^[a-zA-Z0-9]*$/)
    password: string;
}
