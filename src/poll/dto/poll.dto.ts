import {IsOptional, IsString, IsUUID} from 'class-validator';

export class PollDto {
  @IsOptional()
  @IsUUID('4')
  poll_id?: string;

  @IsString()
  poll_name: string;

  //questions: string [];

  @IsString()
  option1: string;

  @IsString()
  option2: string;

  @IsString()
  option3: string;
}
