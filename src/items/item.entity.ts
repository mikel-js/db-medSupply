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
  quantity: number;

  @Column()
  price: number;

  @ManyToOne(() => User, (user) => user.items)
  user: User;
}
