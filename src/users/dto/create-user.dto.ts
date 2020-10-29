import { ArrayMaxSize, ArrayMinSize, IsString, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    firstName: string;

    @IsString()
    @MinLength(10)
    lastName: string;

    fh: string;

    @ArrayMaxSize(10)
    @ArrayMinSize(1)
    languages: string[];

    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,64}$/m, {
        message:
            'Password must be between 6 and 64 characters long with 1 special character and capital character each',
    })
    password: string;
}
