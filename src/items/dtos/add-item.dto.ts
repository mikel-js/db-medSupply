import { IsString, IsNumber, IsOptional } from 'class-validator';

export class AddItemDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;

  @IsString()
  brand: string;

  @IsString()
  @IsOptional()
  imageUrl: string;
}
