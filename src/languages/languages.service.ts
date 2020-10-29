import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLanguageDto } from './dto/create-language.dto';
import { Language } from './language.entity';
import { LanguageRepository } from './language.repository';

@Injectable()
export class LanguagesService {
    constructor(
        @InjectRepository(Language)
        private readonly languagesRepository: LanguageRepository,
    ) {}

    create(createLanguageDto: CreateLanguageDto): Promise<Language> {
        const language = new Language();
        language.difficulty = createLanguageDto.difficulty;
        language.name = createLanguageDto.name;

        return this.languagesRepository.save(language);
    }

    async findAll(): Promise<Language[]> {
        return await this.languagesRepository.find();
    }

    findOne(id: string): Promise<Language> {
        return this.languagesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.languagesRepository.delete(id);
    }

    async findByNames(names: string[]): Promise<Language[]> {
        return await this.languagesRepository.findByNames(names);
    }
}
