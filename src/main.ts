import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    setupSwagger(app);
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.listen(3000);

    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

function setupSwagger(app): void {
    const options: any = new DocumentBuilder()
        .setTitle('Nest Rocks')
        .setDescription('Nest Rocks API description')
        .setVersion('1.0.0')
        .addBearerAuth()
        .build();
    const nestRocksDocs: any = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('api', app, nestRocksDocs);
}
