import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Language } from './language.entity';
import { LanguageRepository } from './language.repository';
import { LanguagesController } from './languages.controller';
import { LanguagesService } from './languages.service';

@Module({
    imports: [TypeOrmModule.forFeature([Language, LanguageRepository])],
    providers: [LanguagesService],
    controllers: [LanguagesController],
    exports: [LanguagesService],
})
export class LanguagesModule {}
