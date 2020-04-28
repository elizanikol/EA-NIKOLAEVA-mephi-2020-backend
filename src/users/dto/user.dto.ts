import {IsEmail, IsOptional, IsString, IsUUID, MinLength} from 'class-validator';
import * as bcrypt from 'bcrypt';

export class UserDto {
  @IsOptional()
  @IsUUID('4')
  id?: string;

  @IsString()
  userName: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
