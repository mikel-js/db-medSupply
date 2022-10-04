import { Item } from 'src/items/item.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { Report } from '../reports/report.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  admin: boolean;

  @OneToMany(() => Item, (item) => item.user)
  items: Item[];
}
