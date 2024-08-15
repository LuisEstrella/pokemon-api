import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import bodyParser from 'body-parser';
import { json, urlencoded } from 'express';
import { Logger } from '@nestjs/common';
import { envs } from './config/envs';

async function bootstrap() {
  const logger = new Logger('MAIN - API Pokemon')
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors();

  // Aumenta el límite de tamaño de la carga útil a 10 MB (puedes ajustar el tamaño según sea necesario)
  // Configura el límite del tamaño de la carga útil a 10 MB
  app.use(json({ limit: '10mb' }));
  app.use(urlencoded({ limit: '10mb', extended: true }));
  
  logger.log(`API running on port ${envs.port}`)

  await app.listen(envs.port);

}
bootstrap();
