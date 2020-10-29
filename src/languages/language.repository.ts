import { EntityRepository, Repository } from 'typeorm';
import { Language } from './language.entity';

@EntityRepository(Language)
export class LanguageRepository extends Repository<Language> {
    constructor() {
        super();
    }

    public findByNames(names: string[]): Promise<Language[]> {
        return this.createQueryBuilder('language')
            .where('language.name IN (:names)', { names })
            .getMany();
    }
}
