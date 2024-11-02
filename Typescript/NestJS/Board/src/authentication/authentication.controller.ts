import { EncryptPassword } from './pipes/authentication.pipe';
import {
    Body,
    Controller,
    HttpCode,
    Post,
    Req,
    UseGuards,
    ValidationPipe,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthCredentialsDto } from './dto/authcredential.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';

@Controller('authentication')
export class AuthenticationController {
    constructor(private authenticationService: AuthenticationService) {}

    @Post('/signup')
    createUser(
        @Body(ValidationPipe, EncryptPassword)
        authCredentialDto: AuthCredentialsDto,
    ) {
        return this.authenticationService.createUser(authCredentialDto);
    }

    @Post('/signin')
    @HttpCode(200)
    signInUser(@Body(ValidationPipe) authCredentialDto: AuthCredentialsDto) {
        return this.authenticationService.signIn(authCredentialDto);
    }

    @Post('/token/signin')
    @HttpCode(200)
    @UseGuards(AuthGuard())
    test(@GetUser() user) {
        console.log('user', user);
    }
}
