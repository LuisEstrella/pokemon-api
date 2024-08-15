import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import bodyParser from 'body-parser';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors();

  // Aumenta el límite de tamaño de la carga útil a 10 MB (puedes ajustar el tamaño según sea necesario)
  // Configura el límite del tamaño de la carga útil a 10 MB
  app.use(json({ limit: '10mb' }));
  app.use(urlencoded({ limit: '10mb', extended: true }));
  
  await app.listen(3000);
}
bootstrap();
