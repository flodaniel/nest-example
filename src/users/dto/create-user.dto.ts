import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @MinLength(2)
    firstName: string;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(2)
    lastName: string;

    @ApiProperty({ required: false, default: 'FH Hagenberg' })
    @IsOptional()
    fh: string;
}
