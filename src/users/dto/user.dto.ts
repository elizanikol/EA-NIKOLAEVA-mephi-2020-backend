import {IsEmail, IsOptional, IsString, IsUUID, MinLength} from 'class-validator';

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
