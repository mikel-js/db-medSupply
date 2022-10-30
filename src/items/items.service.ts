import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { AddItemDto } from './dtos/add-item.dto';
import { GetItemDto } from './dtos/get-item.dto';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(@InjectRepository(Item) private repo: Repository<Item>) {}

  getItem(itemDto: GetItemDto) {
    return this.repo
      .createQueryBuilder()
      .select('*')
      .where('name=:name', { name: itemDto.name })
      .orWhere('category=:category', { category: itemDto.category })
      .orWhere('brand=:brand', { brand: itemDto.brand })
      .getRawMany();
  }

  addItem(itemDto: AddItemDto, user: User) {
    const item = this.repo.create(itemDto);
    item.user = user;
    return this.repo.save(item);
  }

  async changeApproval(id: string, approved: boolean) {
    const item = await this.repo.findOne({ id: parseInt(id) });

    if (!item) {
      throw new NotFoundException('item not found');
    }

    item.approved = approved;
    return this.repo.save(item);
  }
}
