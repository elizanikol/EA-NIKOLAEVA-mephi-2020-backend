import {IsOptional, IsString, IsUUID} from 'class-validator';

export class PollDto {
  @IsOptional()
  @IsUUID('4')
  id?: string;

  @IsString()
  name: string;

  questions: string [][];

  options: string [];
}
