import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  quantity: number;

  @Column()
  price: number;
}
