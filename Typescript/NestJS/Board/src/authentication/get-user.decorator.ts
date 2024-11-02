import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator((_, input: ExecutionContext) => {
    const req = input.switchToHttp().getRequest();
    return req.user;
});
