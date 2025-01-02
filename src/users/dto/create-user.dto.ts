import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserTyupe } from '../enum/users.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(UserTyupe)
  user_type: string;

  @IsString()
  @IsNotEmpty()
  phone_number: string;
}
