import {
  Body,
  Controller,
  Post,
  UseGuards,
  Patch,
  Param,
  Get,
  Query,
} from '@nestjs/common';
import { get } from 'http';
import { AdminGuard } from 'src/guards/admin.guard';
import { AuthGuard } from 'src/guards/auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { AddItemDto } from './dtos/add-item.dto';
import { ApproveItemDto } from './dtos/approve-item.dto';
import { GetItemDto } from './dtos/get-item.dto';
import { ItemDto } from './dtos/item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  getItem(@Query() query: GetItemDto) {
    return this.itemsService.getItem(query);
  }

  @Post('/add')
  @UseGuards(AuthGuard)
  @Serialize(ItemDto)
  addItem(@Body() body: AddItemDto, @CurrentUser() user: User) {
    return this.itemsService.add(body, user);
  }

  @Patch('/:id')
  @UseGuards(AdminGuard)
  approveItem(@Param('id') id: string, @Body() body: ApproveItemDto) {
    return this.itemsService.changeApproval(id, body.approved);
  }
}
