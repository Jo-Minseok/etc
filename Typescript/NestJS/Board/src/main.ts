import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const logger = new Logger();
    const app = await NestFactory.create(AppModule);
    const port = process.env.PORT ?? 8080;
    await app.listen(port);
    logger.log(`Application Running on ${port}`);
}
bootstrap();
