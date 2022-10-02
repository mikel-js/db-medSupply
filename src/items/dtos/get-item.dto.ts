import { IsString, IsNumber } from 'class-validator';

export class GetItemDto {
  @IsString()
  name: string;
}
