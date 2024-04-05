import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [process.env.frontURL],
    methods: ['POST', 'PUT', 'GET', 'PATCH'],
    credentials: true,
    // preflightContinue: false,
    optionsSuccessStatus: 204
  });
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3006);
}
bootstrap();
