import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { AddItemDto } from './dtos/add-item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Post('/add')
  // @UseGuards(AuthGuard)
  addItem(@Body() body: AddItemDto, @CurrentUser() user: User) {
    return this.itemsService.add(body, user);
  }
}
