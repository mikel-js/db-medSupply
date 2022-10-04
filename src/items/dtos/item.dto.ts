import { Expose, Transform } from 'class-transformer';

export class ItemDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  category: string;

  @Expose()
  brand: string;

  @Expose()
  quantity: number;

  @Expose()
  price: number;

  @Expose()
  approved: boolean;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
