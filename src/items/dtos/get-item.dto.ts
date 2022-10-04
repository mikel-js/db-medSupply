import { IsString, IsNumber, IsOptional } from 'class-validator';

export class GetItemDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  brand: string;

  @IsString()
  @IsOptional()
  category: string;
}
