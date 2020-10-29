import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { Language } from './language.entity';
import { LanguagesService } from './languages.service';

@Controller('languages')
export class LanguagesController {
    constructor(private readonly languagesService: LanguagesService) {}

    @Post()
    create(@Body() createUserDto: CreateLanguageDto): Promise<Language> {
        return this.languagesService.create(createUserDto);
    }

    @Get()
    findAll(): Promise<Language[]> {
        return this.languagesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Language> {
        return this.languagesService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.languagesService.remove(id);
    }
}
