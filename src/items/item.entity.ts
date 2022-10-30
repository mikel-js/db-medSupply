import { User } from 'src/users/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  approved: boolean;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  brand: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  imageUrl: string;

  @ManyToOne(() => User, (user) => user.items)
  user: User;
}
