import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { report } from 'process';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { AddItemDto } from './dtos/add-item.dto';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(@InjectRepository(Item) private repo: Repository<Item>) {}

  add(itemDto: AddItemDto, user: User) {
    const item = this.repo.create(itemDto);
    item.user = user;
    return this.repo.save(item);
  }
}
