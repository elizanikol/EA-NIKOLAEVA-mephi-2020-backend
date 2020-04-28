import { IsString } from 'class-validator';

export class OptionDto {
  @IsString()
  name: string;
}
